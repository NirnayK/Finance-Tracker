import React from "react";
// import { useRouter } from "next/router";

// import DataCards from "./dataCards";

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

  data = [...props.data, ...data];

  //   const router = useRouter();

  // Get the query parameter from the URL
  //   const { keyword1, keyword2 } = router.query;

  //   //   setDataCards(
  //   const cards = data.map((item) => (
  //     <DataCards
  //       key={item}
  //       expenseName={item.expenseName}
  //       expenseAmount={item.expenseAmount}
  //       expenseDate={item.expenseDate}
  //       expenseCategory={item.expenseCategory}
  //     />
  //   ));
  //   //   );

  return (
    <>
      <div>
        <div className="flex justify-center items-center w-screen text-gray-950 max-w-full">
          <div className=" w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 ">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr className="border-b border-slate-300">
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider "
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider"
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider"
                          >
                            Category
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-950 uppercase tracking-wider"
                          >
                            Export Data
                          </th> */}
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Delete</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                          <tr key={item}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                {/* <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={person.image}
                                    alt=""
                                  />
                                </div> */}
                                {/* <div className="ml-4"> */}
                                <div className="text-sm font-medium text-gray-900">
                                  {item.expenseName}
                                </div>
                                {/* <div className="text-sm text-gray-950">
                                    {item.expenseAmount}
                                  </div> */}
                                {/* </div> */}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.expenseAmount}
                              </div>
                              {/* <div className="text-sm text-gray-950">
                                {item.expenseCategory}
                              </div> */}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-lime-100 text-lime-800"
                              >
                                {item.expenseDate}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                              {item.expenseCategory}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Edit
                              </a>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                className="text-red-600 hover:text-red-900"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
