export interface User {
    email: string;
    password: string;
  }
  
  export interface Photo {
    id: number;
    url: string;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    text: string;
    photoId: number;
  }
  