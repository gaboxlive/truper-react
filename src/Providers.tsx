import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export interface ProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

export default Providers;
