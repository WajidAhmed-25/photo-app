import React from "react";
import Auth from "../components/Auth";
import { signup } from "../services/authService";

const SignUpPage: React.FC = () => {
  const handleSignUp = async (email: string, password: string) => {
    try {
      await signup(email, password);
      window.location.href = "/login";
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return <Auth title="Sign Up" onSubmit={handleSignUp} />;
};

export default SignUpPage;
