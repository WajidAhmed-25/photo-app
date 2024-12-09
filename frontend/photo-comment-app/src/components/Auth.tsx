import React, { useState } from "react";

interface AuthProps {
  onSubmit: (email: string, password: string) => void;
  title: string;
}

const Auth: React.FC<AuthProps> = ({ onSubmit, title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    // <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-md">
    //   <h2 className="text-2xl font-bold">{title}</h2>
    //   <input
    //     type="email"
    //     placeholder="Email"
    //     className="w-full px-3 py-2 border rounded"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     className="w-full px-3 py-2 border rounded"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button
    //     className="w-full px-3 py-2 text-white bg-blue-500 rounded"
    //     onClick={() => onSubmit(email, password)}
    //   >
    //     {title}
    //   </button>
    // </div>



    // Styled Form //


<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
  <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">{title}</h2>
    
    <input
      type="email"
      placeholder="Email"
      className="w-full px-4 py-3 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    
    <input
      type="password"
      placeholder="Password"
      className="w-full px-4 py-3 mb-6 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    
    <button
      className="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      onClick={() => onSubmit(email, password)}
    >
      {title}
    </button>
  </div>
</div>




  );
};

export default Auth;
