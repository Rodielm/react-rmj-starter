import { Download, Heart } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const PhotoCard = ({ photo }) => (
  <Card key={photo?.id} className="overflow-hidden">
    <CardContent className="p-0">
      <div className="relative group">
        <img
          src={photo?.src?.portrait}
          alt={photo?.alt || "No description available"}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-medium mb-2">{photo?.alt}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4" /> {photo?.likes}
                </span>
                <span className="flex items-center gap-1">
                  <Download className="w-4 h-4" /> {photo?.downloads}
                </span>
              </div>
              <Button
                size="sm"
                variant="secondary"
                className="opacity-90 hover:opacity-100"
              >
                <Download className="w-4 h-4 mr-1" /> Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PhotoCard;
