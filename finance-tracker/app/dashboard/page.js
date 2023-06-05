"use client";
import Add from "@/components/add";
import Show from "@/components/show";
import Export from "@/components/export";
import Charts from "@/components/charts";
import Modals from "@/components/modals";
import React from "react";
import Navbar from "@/components/NavBar";
import CustomSessionProvider from "@/components/CustomSessionProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Dashboard() {
  //   dashboard page to a financial tracker app using tailwindcss with option to add delete and update the finances

  // a react form component using tightwindcss
  const { data: session } = useSession();
  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const router = useRouter();

  if (session) {
    return (
      <QueryClientProvider client={new QueryClient()}>
        <Add data={data} set={(d) => setData(d)} />
        <Charts data={data} />
        <Show data={data} />
        <Export data={data} />
      </QueryClientProvider>
    );
  } else {
    return;
  }
}
