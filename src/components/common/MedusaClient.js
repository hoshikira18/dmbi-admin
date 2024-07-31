"use client";
import { MedusaProvider } from "medusa-react";
import { QueryClient } from "@tanstack/react-query";
import React from "react";

const queryClient = new QueryClient();

const MedusaClient = ({ children }) => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={process.env.NEXT_PUBLIC_BASE_URL}
    >
      {children}
    </MedusaProvider>
  );
};

export default MedusaClient;
