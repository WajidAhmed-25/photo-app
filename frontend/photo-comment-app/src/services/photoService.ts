import axios from "axios";

const API_URL = 'http://localhost:5000';
console.log(API_URL)

export const uploadPhoto = (token: string, photo: File) => {
  const formData = new FormData();
  formData.append("photo", photo);
  return axios.post(`${API_URL}/photos/upload`, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};



export const getPhotos = (token: string) =>
  axios.get(`${API_URL}/photos`, {
    headers: { Authorization: `Bearer ${token}` },
  });
