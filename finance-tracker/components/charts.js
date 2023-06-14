import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";
import {Bar} from "react-chartjs-2";
import {useEffect} from "react";

function DoughnutChart(props) {
  // all time data

  const sum_miscellaneous = props.data.reduce((total, item) => {
    if (item.expense_category === "Miscellaneous") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_entertainment = props.data.reduce((total, item) => {
    if (item.expense_category === "Entertainment") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_shopping = props.data.reduce((total, item) => {
    if (item.expense_category === "Shopping") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_grocery = props.data.reduce((total, item) => {
    if (item.expense_category === "Grocery") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_travel = props.data.reduce((total, item) => {
    if (item.expense_category === "Travel") {
      total += item.expense_amt;
    }
    return total;
  }, 0);

  const chartData = {
    labels: ["miscellaneous", "entertainment", "shopping", "grocery", "travel"],
    datasets: [
      {
        data: [
          sum_miscellaneous,
          sum_entertainment,
          sum_shopping,
          sum_grocery,
          sum_travel,
        ],
        borderColor: ["#000"],
        backgroundColor: ["#aad576", "#90a955", "#538d22", "#143601"],
        pointBackgroundColor: "#000",
      },
    ],
  };

  // each month data

  const sum_jan = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 0) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_feb = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 1) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_mar = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 2) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_april = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 3) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_may = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 4) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_june = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 5) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_july = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 6) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_aug = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 7) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_sept = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 8) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_oct = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 9) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_nov = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 10) {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_dec = props.data.reduce((total, item) => {
    if ((new Date(item.expense_date)).getDate() === 11) {
      total += item.expense_amt;
    }
    return total;
  }, 0);

  const barData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Yearly Expenses",
        backgroundColor: "#aad576",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          sum_jan,
          sum_feb,
          sum_mar,
          sum_april,
          sum_may,
          sum_june,
          sum_july,
          sum_aug,
          sum_sept,
          sum_oct,
          sum_nov,
          sum_dec,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen text-gray-950 max-w-full">
        {/* <div className=" w-5/6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 md:w-2/3"> */}
        <div
          className="flex flex-col justify-center items-center w-5/6 md:w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 ">
          {/* <h1>Creating a Doughnut Chart</h1> */}
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex justify-center w-screen max-h-60 md:w-1/3 text-gray-950 max-w-full">
              <Doughnut data={chartData}/>
            </div>
            <div
              className="flex justify-center w-screen h-60 md:max-h-60 md:w-2/3 text-gray-950 max-w-full pt-4 md:pt-0">
              <Bar
                style={{width: "100%", hiehgt: "100%"}}
                data={barData}
                options={options}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default DoughnutChart;


// let data = [
//   {
//     expense_name: "Name 1",
//     expense_amt: 100,
//     expense_date: "2021-01-01",
//     expense_category: "Category 1",
//   },
//   {
//     expense_name: "Name 2",
//     expense_amt: 200,
//     expense_date: "2021-02-02",
//     expense_category: "Category 2",
//   },
//   {
//     expense_name: "Name 3",
//     expense_amt: 300,
//     expense_date: "2021-01-03",
//     expense_category: "Category 3",
//   },
//   {
//     expense_name: "Name 4",
//     expense_amt: 400,
//     expense_date: "2021-10-04",
//     expense_category: "Category 4",
//   },
//   {
//     expense_name: "Name 5",
//     expense_amt: 100,
//     expense_date: "2021-02-01",
//     expense_category: "Category 1",
//   },
//   {
//     expense_name: "Name 6",
//     expense_amt: 200,
//     expense_date: "2021-01-02",
//     expense_category: "Category 2",
//   },
//   {
//     expense_name: "Name 7",
//     expense_amt: 300,
//     expense_date: "2021-03-03",
//     expense_category: "Category 3",
//   },
//   {
//     expense_name: "Name 8",
//     expense_amt: 400,
//     expense_date: "2021-01-04",
//     expense_category: "Category 4",
//   },
// ];