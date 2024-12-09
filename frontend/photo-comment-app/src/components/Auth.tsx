import React, { useState } from "react";

interface AuthProps {
  onSubmit: (email: string, password: string) => void;
  title: string;
}

const Auth: React.FC<AuthProps> = ({ onSubmit, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-full px-3 py-2 text-white bg-blue-500 rounded"
        onClick={() => onSubmit(email, password)}
      >
        {title}
      </button>
    </div>
  );
};

export default Auth;
