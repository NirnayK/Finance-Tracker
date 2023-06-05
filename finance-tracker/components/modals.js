import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Example(props) {
  const [open, setOpen] = useState(props.show);

  //   useEffect(() => {
  //     props.set(false);
  //   }, [open]);

  const cancelButtonRef = useRef(null);

  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setOpen(true)}
      >
        New Modal
      </button> */}
      <Transition.Root show={open} as={Fragment}>
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

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
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
                    <div className=" w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 ">
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
  );
}
