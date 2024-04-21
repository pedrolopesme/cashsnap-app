import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../context/AuthContext";
import LoginForm from "../features/Authentication/LoginForm";

function LoginScreen() {
  // if (isAuthenticating) return <LoadingOverlay message="Log you in..." />;
  return <LoginForm />;
}

export default LoginScreen;
