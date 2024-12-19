import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Authprovider from "./providers/Authprovider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-gray-900 min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Authprovider>
          <RouterProvider router={router}></RouterProvider>
        </Authprovider>
      </QueryClientProvider>
    </div>
  </StrictMode>
);
