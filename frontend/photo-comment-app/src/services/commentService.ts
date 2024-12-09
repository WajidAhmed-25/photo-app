import axios from "axios";

const API_URL = 'http://localhost:5000';
console.log(API_URL)

export const addComment = (token: string, photoId: number, text: string) =>
  axios.post(
    `${API_URL}/comments/add`,
    { photoId, text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
