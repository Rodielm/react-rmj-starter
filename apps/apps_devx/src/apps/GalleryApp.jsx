import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// TODO
// search images
// images info
// Pagination

const GalleryApp = () => {
  const key_pexel = import.meta.env.VITE_API_PEXEL;

  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const { fetchData, loading, error } = useFetch();
  const baseUrl = "https://api.pexels.com/v1/";
  const fullUrl = `${baseUrl}${
    searchQuery ? `search?query=${encodeURIComponent(searchQuery)}` : "curated"
  }`;
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const [dataPagination, setDataPagination] = useState();

  // const { data, loading, error } = useFetchBasic(
  //   fullUrl,
  //   {
  //     headers: {
  //       Authorization: key_pexel, // Replace with your pexels API key
  //     },
  //   },
  //   [searchQuery]
  // );

  useEffect(() => {
    searchPhotos("", fullUrl);
    const { page, per_page, total_results, next_page } = data;
    setDataPagination({ page, per_page, total_results, next_page });
    console.log("run only once");
  }, []);

  const searchPhotos = async (query, fullUrl, page = false) => {
    const options = {
      headers: {
        Authorization: key_pexel,
      },
    };
    const result = await fetchData(fullUrl, options);
    if (result?.photos) {
      setData(result);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchPhotos(searchQuery, fullUrl);
      const { page, per_page, total_results, next_page } = data;
      setDataPagination({ page: 1, per_page, total_results, next_page });
    }
  };

  const nextPage = (page) => {
    let urlPage = "";
    if (searchQuery) {
      urlPage = `https://api.pexels.com/v1/search/?page=${page}\u0026per_page=15\u0026query=%22${searchQuery}%22`;
    } else {
      urlPage = `https://api.pexels.com/v1/curated/?page=${page}&per_page=15`;
    }
    searchPhotos("", urlPage);
    setDataPagination((prevData) => ({ ...prevData, page: page }));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-center mb-4">Gallery App</h1>

        {/* Filter Section */}
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search for images..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button onClick={(e) => handleSearch(e)} disabled={loading}>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Error Handling */}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-48 rounded-lg" />
          ))
        ) : data && data?.photos ? (
          data.photos.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-200"
            >
              <img
                className="w-full h-full object-cover"
                src={image.src.portrait}
                alt={image.alt || "Image"}
              />
              <div className="p-2">
                <p className="text-sm text-gray-600">
                  {image.alt || "No description available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No images found.</p>
        )}
      </div>
      <div className="mt-3">
        <Pagination>
          <PaginationContent>
            {dataPagination?.page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => nextPage(dataPagination?.page - 1)}
                />
              </PaginationItem>
            )}
            {numbers.map((number) => (
              <PaginationItem>
                <PaginationLink
                  isActive={number === dataPagination?.page}
                  onClick={() => nextPage(number)}
                >
                  {number}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => nextPage(dataPagination?.page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {data.photos?.length > 0 && (
          <div className="mt-4 text-center text-gray-500">
            Showing {data.photos?.length} of {dataPagination?.total_results} results
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryApp;
