import React from "react";
import Auth from "../components/Auth";
import { login } from "../services/authService";

const LoginPage: React.FC = () => {
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.data.token);
      window.location.href = "/main";
    } catch (error) {
      alert("Login Failed");
    }
  };

  return <Auth title="Login" onSubmit={handleLogin} />;
};

export default LoginPage;
