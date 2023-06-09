import React from "react";
// import { useRouter } from "next/router";
import Modal from "./modal";
import Modals from "./modals";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import DataCards from "./dataCards";

export default function Show(props) {
  // let data = [
  //   {
  //     expenseName: "Name 1",
  //     expenseAmount: 100,
  //     expenseDate: "2021-01-01",
  //     expenseCategory: "Category 1",
  //   },
  //   {
  //     expenseName: "Name 2",
  //     expenseAmount: 200,
  //     expenseDate: "2021-01-02",
  //     expenseCategory: "Category 2",
  //   },
  //   {
  //     expenseName: "Name 3",
  //     expenseAmount: 300,
  //     expenseDate: "2021-01-03",
  //     expenseCategory: "Category 3",
  //   },
  //   {
  //     expenseName: "Name 4",
  //     expenseAmount: 400,
  //     expenseDate: "2021-01-04",
  //     expenseCategory: "Category 4",
  //   },
  //   {
  //     expenseName: "Name 5",
  //     expenseAmount: 100,
  //     expenseDate: "2021-01-01",
  //     expenseCategory: "Category 1",
  //   },
  //   {
  //     expenseName: "Name 6",
  //     expenseAmount: 200,
  //     expenseDate: "2021-01-02",
  //     expenseCategory: "Category 2",
  //   },
  //   {
  //     expenseName: "Name 7",
  //     expenseAmount: 300,
  //     expenseDate: "2021-01-03",
  //     expenseCategory: "Category 3",
  //   },
  //   {
  //     expenseName: "Name 8",
  //     expenseAmount: 400,
  //     expenseDate: "2021-01-04",
  //     expenseCategory: "Category 4",
  //   },
  // ];

  // let data = [...props.data];
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = useState(props.show);
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);

  //   useEffect(() => {
  //     props.set(false);
  //   }, [open]);

  const cancelButtonRef = useRef(null);
  const [item, setItem] = useState({});

  // useEffect(() => {}, [show]);

  return (
    <>
      {/* <div className="App h-screen flex flex-col items-center justify-center bg-purple-200"> */}
      {/* <Modal /> */}
      {/* <Modals /> */}
      {/* </div> */}
      <div>
        <div className="flex justify-center items-center w-screen text-gray-950 max-w-full">
          <div className=" w-5/6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 md:w-2/3">
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
                          return (
                            <tr key={item.expense_id}>
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
                                {/* <a
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={
                                  // toggle models
                                  setShow(true)
                                }
                              > */}
                                <button
                                  className="text-red-500"
                                  onClick={() => setOpen(true)}
                                >
                                  Edit
                                </button>
                                {/* </a> */}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button onClick={() => {}}>Delete</button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* {props.show ? <Modals show={true} /> : null} */}
            {/* <Modals /> */}
          </div>
        </div>
      </div>

      {/* modal starts */}
      <>
        {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setOpen(true)}
      >
        New Modal
      </button> */}
        <Transition.Root show={show} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="flex items-center justify-center fixed inset-0 z-10 overflow-y-auto">
              <div className="flex sm:min-h-full items-end justify-center m-4 p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="w-11/12 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8  sm:w-full sm:max-w-lg ">
                    {/* add my new element */}
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 font-xl block text-xl m-1 rounded-full">
                        X
                      </span>
                    </button>
                    <div className="flex justify-center items-center w-screen h-full max-w-full">
                      <div className=" w-full bg-white shadow-md rounded px-8 pt-6 pb-8 flex flex-col ">
                        <div className="-mx-3 md:flex mb-6">
                          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                              htmlFor="grid-first-name"
                            >
                              Expense Name
                            </label>
                            <input
                              className="appearance-none block w-full bg-grey-lighter text-gray-950 border border-red rounded py-3 px-4 mb-3"
                              id="grid-first-name"
                              type="text"
                              placeholder="Expense Name"
                              //   value={expenseName}
                              //   onChange={handleExpenseNameChange}
                            />
                            {/* <p className="text-red text-xs italic">Amount</p> */}
                          </div>
                          <div className="md:w-1/2 px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                              htmlFor="grid-last-name"
                            >
                              Amount
                            </label>
                            <input
                              className="appearance-none block w-full bg-grey-lighter text-gray-950 border border-grey-lighter rounded py-3 px-4"
                              id="grid-last-name"
                              type="number"
                              placeholder="Amount"
                              //   value={amount}
                              //   onChange={handleAmountChange}
                            />
                          </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                              htmlFor="grid-first-name"
                            >
                              Expense Date
                            </label>
                            <input
                              className="appearance-none block w-full bg-grey-lighter text-gray-950 border border-red rounded py-3 px-4 mb-3"
                              id="grid-first-name"
                              type="date"
                              placeholder="Expense Date"
                              //   value={expenseDate}
                              //   onChange={handleExpenseDateChange}
                            />
                            {/* <p className="text-red text-xs italic">Amount</p> */}
                          </div>

                          <div className="md:w-1/2 px-3">
                            <label
                              className="block uppercase tracking-wide text-gray-950 text-xs font-bold mb-2"
                              htmlFor="grid-state"
                            >
                              Category
                            </label>
                            <div className="relative">
                              <select
                                className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-gray-950 py-3 px-4 pr-8 rounded"
                                id="grid-state"
                                // value={category}
                                // onChange={handleCategoryChange}
                              >
                                <option>Category 1</option>
                                <option>Category 2</option>
                                <option>Category 3</option>
                                <option>Category 4</option>
                              </select>
                              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-gray-950"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className=" w-1/2 text-red-950 bg-red-400 focus:ring-red-300 font-2xl font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                            onClick={() => {
                              // props.set([
                              //   ...props.data,
                              //   {
                              //     expenseName: expenseName,
                              //     expenseAmount: amount,
                              //     expenseDate: expenseDate,
                              //     expenseCategory: category,
                              //   },
                              // ]);
                              setOpen(false);
                            }}
                          >
                            CANCEL
                          </button>
                          <button
                            type="button"
                            className=" w-1/2 text-lime-950 bg-lime-400 focus:ring-lime-300 font-2xl font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                            onClick={() => {
                              // props.set([
                              //   ...props.data,
                              //   {
                              //     expenseName: expenseName,
                              //     expenseAmount: amount,
                              //     expenseDate: expenseDate,
                              //     expenseCategory: category,
                              //   },
                              // ]);
                              setOpen(false);
                            }}
                          >
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* new element ends */}

                    {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
      {/* modal ends */}
    </>
  );
}
