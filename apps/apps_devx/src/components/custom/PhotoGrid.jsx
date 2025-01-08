import { Skeleton } from "../ui/skeleton";
import PhotoCard from "./PhotoCard";

const PhotoGrid = ({ photos, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="h-48 rounded-lg" />
        ))}
      </div>
    );
  }

  if (!photos?.length) {
    return <p className="text-center">No images found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo?.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
