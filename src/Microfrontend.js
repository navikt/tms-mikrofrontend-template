import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import App from "./App";
import "./App.less";

const Microfrontend = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );
};

export default Microfrontend;
