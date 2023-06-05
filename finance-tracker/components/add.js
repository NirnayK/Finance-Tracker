"use client";

import React, { useEffect } from "react";
import { useQuery } from "react-query";

export default function Add(props) {
  // Form grid using tailwindcss
  const [expenseName, setExpenseName] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const [expenseDate, setExpenseDate] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const user_id = 1;

  const fetchData = async (user_id) => {
    return await fetch("http://localhost:3000/api/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    }).then((res) => res.json());
  };

  const {
    data: data1,
    error: error1,
    refetch: refetch1,
  } = useQuery(["fetchData", user_id], () => fetchData(user_id), {
    enabled: false,
  });

  useEffect(() => {
    refetch1();
  }, [refetch1]);

  useEffect(() => {
    if (data1 && data1.data) {
      console.log(data1.data.reverse());
      props.set(data1.data);
    }
  }, [data1]);

  useEffect(() => {
    if (error1) alert(error1);
  }, [error1]);

  // create functions to handle the change in the input fields
  const handleExpenseNameChange = (event) => {
    setExpenseName(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(Number.parseFloat(event.target.value));
  };
  const handleExpenseDateChange = (event) => {
    setExpenseDate(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const addExpense = async (desc, amount, user_id, date, category) => {
    return await fetch("http://localhost:3000/api/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc, user_id, amount, date, category }),
    }).then((res) => res.json());
  };

  const { data, error, refetch } = useQuery(
    ["addExpense", expenseName, amount, user_id, expenseDate, category],
    () => addExpense(expenseName, amount, user_id, expenseDate, category),
    { enabled: false }
  );

  useEffect(() => {
    if (data && data.error) {
      alert(Object.values(data.error)[0]);
    } else if (flag && data && data.data) {
      console.log("HERE");

      props.set([
        {
          expense_id: data.data,
          expense_desc: expenseName,
          expense_amt: amount,
          expense_date: expenseDate,
          expense_category: category,
        },
        ...props.data,
      ]);

      setFlag(false);
    }
  }, [flag, data]);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

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
                <option></option>
                <option>Miscellaneous</option>
                <option>Entertainment</option>
                <option>Shopping</option>
                <option>Groceries</option>
                <option>Travel</option>
              </select>
              <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-gray-950"></div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="text-lime-950 bg-lime-400 focus:ring-lime-300 font-2xl font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
          onClick={() => {
            
            setFlag(true);
            refetch().catch((e) => console.log("[error] ", e));
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
