import React from "react";

export default function URLCards(props) {
  return (
    <>
      {/* <div className="flex justify-center items-center w-screen text-gray-950">
        <div className=" w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 "> */}
      <div className="flex justify-between mx-10 text-gray-950 flex-wrap">
        <p>{props.expenseName}</p>
        <p>{props.expenseAmount}</p>
        <p>{props.expenseDate}</p>
        <p>{props.expenseCategory}</p>
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
