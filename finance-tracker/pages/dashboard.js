"use client";
import Add from "../components/add";
import Show from "../components/show";
import Export from "../components/export";
import Charts from "../components/charts";
import Modals from "../components/modals";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const query = new QueryClient();
export default function Dashboard() {
  //   dashboard page to a financial tracker app using tailwindcss with option to add delete and update the finances

  // a react form component using tightwindcss

  const [data, setData] = React.useState([]);
  const [show, setShow] = React.useState(false);

  return (
    <>
      <QueryClientProvider client={query}>
        <Add data={data} set={(d) => setData(d)} />
        <Charts data={data} />
        <Show data={data} />
        <Export data={data} />
      </QueryClientProvider>
    </>
  );
}
