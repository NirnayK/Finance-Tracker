import React from "react";
import ExcelLogo from "../app/excel_logo.png";

export default function Show(props) {
  let data = [...props.data];

  function exportData() {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        const escaped = ("" + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }

    const today = new Date().toLocaleDateString();

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", `finance_tracker_${today}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <>
      <div>
        <div className="flex justify-center items-center w-screen text-gray-950 max-w-full">
          <div className="flex flex-col justify-evenly items-center w-5/6 md:w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 md:flex-row ">
            <h1 className="text-centerpb-4 text-xl font-bold my-2 md:my-0">
              Export data to CSV
              <img
                src="https://img.icons8.com/?size=512&id=UECmBSgBOvPT&format=png"
                alt="Excel Logo"
                className="pl-2 w-10 h-8 hidden inline-block md:inline-block"
              />
            </h1>
            <button
              type="button"
              className=" w-fir text-lime-950 bg-lime-400 focus:ring-lime-300 font-bold rounded-lg text-l px-3 py-1.5 mr-2 mb-2 "
              onClick={exportData}
            >
              DOWNLOAD
              <img
                src="https://img.icons8.com/?size=512&id=UECmBSgBOvPT&format=png"
                alt="Excel Logo"
                className="pl-1 w-8 h-7 inline-block md:hidden"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Export1() {
  return <></>
}