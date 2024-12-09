import React, { useState } from "react";

interface PhotoUploadProps {
  onUpload: (file: File) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    if (file) onUpload(file);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        className="px-4 py-2 text-white bg-green-500 rounded"
        onClick={handleSubmit}
      >
        Upload Photo
      </button>
    </div>
  );
};

export default PhotoUpload;
