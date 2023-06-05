import Image from "next/image";
import HomePage from "@/components/HomePage";
import Dashboard from "@/pages/dashboard";

import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Dashboard />
      {/* <HomePage /> */}
    </>
  );
}
