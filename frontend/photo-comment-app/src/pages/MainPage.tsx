import React, { useEffect, useState } from "react";
import { getPhotos } from "../services/photoService";
import { uploadPhoto } from "../services/photoService";
import PhotoList from "../components/PhotoList";
import PhotoUpload from "../components/PhotoUpload";

import { Photo } from "../types";

const MainPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState("");

  const fetchPhotos = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await getPhotos(token);
      setPhotos(response.data.photos);
    } catch (err) {
      setError("Failed to fetch photos");
    }
  };

  const handleUpload = async (file: File) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      await uploadPhoto(token, file);
      fetchPhotos();
    } catch (err) {
      setError("Failed to upload photo");
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="max-w-3xl mx-auto">
        {/* Photo Upload Component */}
        <PhotoUpload onUpload={handleUpload} />

        {/* Photo List Component */}
        <PhotoList photos={photos} fetchPhotos={fetchPhotos} />
      </div>
    </div>
  );
};

export default MainPage;
