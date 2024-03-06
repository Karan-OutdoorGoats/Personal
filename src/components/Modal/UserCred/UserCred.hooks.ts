import { useState } from "react";

const useUserCred = () => {
  const [credType, setCredType] = useState<
    "Login" | "SignUp" | "ForgotPassword"
  >("Login");

  return {
    credType,
    setCredType,
  };
};

export { useUserCred };
