import React from "react";
import { AuthUserProvider } from "../auth/AuthUserProvider";
import Routes from "./routes";

export default function Providers() {
  return (
    <AuthUserProvider>
      <Routes />
    </AuthUserProvider>
  );
}
