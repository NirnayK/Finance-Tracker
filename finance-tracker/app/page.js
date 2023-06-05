"use client";

import Image from "next/image";
import HomePage from "@/components/HomePage";
import Dashboard from "@/pages/dashboard";
import Navbar from "@/components/NavBar";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Dashboard />
      {/* <HomePage /> */}
    </QueryClientProvider>
  );
}
