"use client";

import React from "react";
import Link from "next/link";

export default function Add(props) {
  // Form grid using tailwindcss
  const [expenseName, setExpenseName] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [expenseDate, setExpenseDate] = React.useState("");
  const [category, setCategory] = React.useState("");

  // create fucntions to handle the change in the input fields
  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleExpenseDateChange = (event) => {
    setExpenseDate(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="flex justify-center items-center w-screen h-full max-w-full">
      <div className=" w-5/6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 md:w-2/3">
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
              value={expenseName}
              onChange={handleExpenseNameChange}
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
              value={amount}
              onChange={handleAmountChange}
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
              value={expenseDate}
              onChange={handleExpenseDateChange}
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
                value={category}
                onChange={handleCategoryChange}
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

        <button
          type="button"
          className="text-lime-950 bg-lime-400 focus:ring-lime-300 font-2xl font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          onClick={() => {
            props.set([
              ...props.data,
              {
                expenseName: expenseName,
                expenseAmount: amount,
                expenseDate: expenseDate,
                expenseCategory: category,
              },
            ]);
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
