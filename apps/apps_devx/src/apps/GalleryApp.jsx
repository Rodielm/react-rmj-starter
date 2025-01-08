import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import pexel_data from "../data/pexels_data.json";
import PhotoGrid from "@/components/custom/PhotoGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import SearchBar from "@/components/custom/SearchBar";

const GalleryApp = () => {
  const api_key = import.meta.env.VITE_API_PEXEL;

  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState({});
  const { fetchData, loading, error } = useFetch();
  const baseUrl = "https://api.pexels.com/v1/";
  const fullUrl = `${baseUrl}${
    searchQuery ? `search?query=${encodeURIComponent(searchQuery)}` : "curated"
  }`;
  const [paginationInfo, setPaginationInfo] = useState();

  const buildUrl = (query = "", page = 1) => {
    const baseUrl = "https://api.pexels.com/v1/";
    if (query) {
      return `${baseUrl}search?query=${encodeURIComponent(
        query
      )}&page=${page}&per_page=${paginationInfo?.per_page}`;
    }
    return `${baseUrl}curated?page=${page}${
      paginationInfo?.per_page ? `&per_page=${paginationInfo?.per_page}` : ""
    }`;
  };

  useEffect(() => {
    // setData(pexel_data);
    // const { page, per_page, total_results, next_page } = pexel_data;
    // setPaginationInfo({ page, per_page, total_results, next_page });
    searchPhotos(buildUrl());
    console.log("run only once");
  }, []);

  const searchPhotos = async (url) => {
    console.log("url", url);
    const options = {
      headers: {
        Authorization: api_key,
      },
    };
    const result = await fetchData(url, options);
    if (result?.photos) {
      setData(result);
      setPaginationInfo({
        page: result.page,
        per_page: result.per_page,
        total_results: result.total_results,
      });
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    searchPhotos(buildUrl(query, 1));
    // const { page, per_page, total_results, next_page } = data;
    // setPaginationInfo({ page: 1, per_page, total_results, next_page });
  };

  const handlePageChange = (page) => {
    // let urlPage = "";
    // if (searchQuery) {
    //   urlPage = `https://api.pexels.com/v1/search/?page=${page}\u0026per_page=15\u0026query=%22${searchQuery}%22`;
    // } else {
    //   urlPage = `https://api.pexels.com/v1/curated/?page=${page}&per_page=15`;
    // }
    // searchPhotos("", urlPage);
    // setPaginationInfo((prevData) => ({ ...prevData, page: page }));
    searchPhotos(buildUrl(searchQuery, page));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-center mb-4">Gallery App</h1>
        <SearchBar onSearch={handleSearch} loading={loading} />
        {/* Filter Section */}
        {/* <div className="flex gap-2">
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
        </div> */}
      </div>

      {/* Error Handling */}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <PhotoGrid photos={data?.photos} loading={loading} />
      {data?.photos?.length > 0 && (
        <CustomPagination
          currentPage={paginationInfo.page}
          totalResults={paginationInfo.total_results}
          perPage={paginationInfo.per_page}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default GalleryApp;
