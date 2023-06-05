import React, {useEffect} from "react";
// import { useRouter } from "next/router";

// import DataCards from "./dataCards";

export default function Show(props) {
  useEffect(() => {
    console.log(props.data);
  }, [props]);

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
              <div className="-my-2 overflow-auto max-h-80 sm:-mx-6 lg:-mx-8">
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
                      {props.data.map((item) => {
                        const d = new Date(item.expense_date);
                        return (<tr key={item.expense_id}>
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
                                  {item.expense_desc}
                                </div>
                                {/* <div className="text-sm text-gray-950">
                                    {item.expenseAmount}
                                  </div> */}
                                {/* </div> */}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {item.expense_amt}
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
                                {d.toDateString()}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-950">
                              {item.expense_category}
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
                        )
                      })}
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
