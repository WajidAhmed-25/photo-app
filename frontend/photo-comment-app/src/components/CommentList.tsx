import React, { useState } from "react";
import { Comment } from "../types";

interface CommentListProps {
  comments: Comment[];
  onAddComment: (text: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="mt-2">
      <ul className="space-y-1 mb-2">
        {comments.map((comment) => (
          <li key={comment.id} className="text-gray-600">
            • {comment.text}
          </li>
        ))}
      </ul>

      {/* Add Comment Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentList;
