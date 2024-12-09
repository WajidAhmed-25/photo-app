import React from "react";
import { Photo } from "../types";
import CommentList from "./CommentList";
import { addComment } from "../services/commentService";

interface PhotoListProps {
  photos: Photo[];
  fetchPhotos: () => void;
}

const PhotoList: React.FC<PhotoListProps> = ({ photos, fetchPhotos }) => {
  const handleAddComment = async (photoId: number, text: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      await addComment(token, photoId, text);
      fetchPhotos();
    } catch (err) {
      alert("Failed to add comment");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="bg-white rounded-lg shadow-md p-4 flex flex-col"
        >
          <img
            src={photo.url}
            alt={`Photo ${photo.id}`}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-lg font-semibold mt-2">Comments:</h3>

          {/* Comment List Component */}
          <CommentList
            comments={photo.comments}
            onAddComment={(text) => handleAddComment(photo.id, text)}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
