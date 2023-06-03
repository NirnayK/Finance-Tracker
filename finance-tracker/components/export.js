import React from "react";
import ExcelLogo from "../app/excel_logo.png";

export default function Show(props) {
  let data = [
    {
      expenseName: "Name 1",
      expenseAmount: 100,
      expenseDate: "2021-01-01",
      expenseCategory: "Category 1",
    },
    {
      expenseName: "Name 2",
      expenseAmount: 200,
      expenseDate: "2021-01-02",
      expenseCategory: "Category 2",
    },
    {
      expenseName: "Name 3",
      expenseAmount: 300,
      expenseDate: "2021-01-03",
      expenseCategory: "Category 3",
    },
    {
      expenseName: "Name 4",
      expenseAmount: 400,
      expenseDate: "2021-01-04",
      expenseCategory: "Category 4",
    },
  ];

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
          <div className="flex flex-col justify-center items-center w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 ">
            <h1 className="text-center pb-4 text-xl font-bold">
              Export data to CSV
              <img
                src="https://img.icons8.com/?size=512&id=UECmBSgBOvPT&format=png"
                alt="Excel Logo"
                className="pl-2 w-10 h-8 inline-block"
              />
            </h1>
            <button
              type="button"
              className=" w-fir text-lime-950 bg-lime-400 focus:ring-lime-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
              onClick={exportData}
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
