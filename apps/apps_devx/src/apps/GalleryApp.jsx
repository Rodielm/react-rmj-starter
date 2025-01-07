import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search } from "lucide-react";

// TODO
// search images
// images info
// Pagination

const GalleryApp = () => {
  const key_pexel = import.meta.env.VITE_API_PEXEL;

  const [searchQuery, setSearchQuery] = useState("");
  const { fetchData, loading, error } = useFetch();
  const [ photos, setPhotos ] = useState([]);

  const baseUrl = "https://api.pexels.com/v1/";
  const fullUrl = `${baseUrl}${
    searchQuery ? `search?query=${encodeURIComponent(searchQuery)}` : "curated"
  }`;
  let filter = "";

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
    searchPhotos("");
    console.log("runs once");
  }, []);

  const searchPhotos = async (query) => {
    const options = {
      headers: {
        Authorization: key_pexel,
      },
    };

    const result = await fetchData(fullUrl, options);
    if (result?.photos) {
      setPhotos(result.photos);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchPhotos(searchQuery);
    }
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
        ) : photos?.length > 0 ? (
          photos.map((image) => (
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
    </div>
  );
};

export default GalleryApp;
