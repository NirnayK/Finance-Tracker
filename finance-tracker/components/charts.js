import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

function DoughnutChart(props) {
  // let data = [
  //   {
  //     expenseName: "Name 1",
  //     expense_amt: 100,
  //     expenseDate: "2021-01-01",
  //     expenseCategory: "Category 1",
  //   },
  //   {
  //     expenseName: "Name 2",
  //     expense_amt: 200,
  //     expenseDate: "2021-02-02",
  //     expenseCategory: "Category 2",
  //   },
  //   {
  //     expenseName: "Name 3",
  //     expense_amt: 300,
  //     expenseDate: "2021-01-03",
  //     expenseCategory: "Category 3",
  //   },
  //   {
  //     expenseName: "Name 4",
  //     expense_amt: 400,
  //     expenseDate: "2021-10-04",
  //     expenseCategory: "Category 4",
  //   },
  //   {
  //     expenseName: "Name 5",
  //     expense_amt: 100,
  //     expenseDate: "2021-02-01",
  //     expenseCategory: "Category 1",
  //   },
  //   {
  //     expenseName: "Name 6",
  //     expense_amt: 200,
  //     expenseDate: "2021-01-02",
  //     expenseCategory: "Category 2",
  //   },
  //   {
  //     expenseName: "Name 7",
  //     expense_amt: 300,
  //     expenseDate: "2021-03-03",
  //     expenseCategory: "Category 3",
  //   },
  //   {
  //     expenseName: "Name 8",
  //     expense_amt: 400,
  //     expenseDate: "2021-01-04",
  //     expenseCategory: "Category 4",
  //   },
  // ];

  let data = [...props.data];

  // all time data

  const sum_category1 = props.data.reduce((total, item) => {
    if (item.expense_category === "Miscellaneous") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_category2 = data.reduce((total, item) => {
    if (item.expense_category === "Entertainment") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_category3 = data.reduce((total, item) => {
    if (item.expenseCategory === "Category 3") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_category4 = data.reduce((total, item) => {
    if (item.expenseCategory === "Category 4") {
      total += item.expense_amt;
    }
    return total;
  }, 0);

  const chartData = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        data: [sum_category1, sum_category2, sum_category3, sum_category4],
        borderColor: ["#000"],
        backgroundColor: ["#aad576", "#90a955", "#538d22", "#143601"],
        pointBackgroundColor: "#000",
      },
    ],
  };

  // each month data

  const sum_jan = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "01") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_feb = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "02") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_mar = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "03") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_april = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "04") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_may = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "05") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_june = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "06") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_july = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "07") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_aug = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "08") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_sept = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "09") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_oct = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "10") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_nov = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "11") {
      total += item.expense_amt;
    }
    return total;
  }, 0);
  const sum_dec = data.reduce((total, item) => {
    if (item.expenseDate.slice(5, 7) === "12") {
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
        <div className="flex flex-col justify-center items-center w-5/6 md:w-2/3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 my-2 ">
          {/* <h1>Creating a Doughnut Chart</h1> */}
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex justify-center w-screen max-h-60 md:w-1/3 text-gray-950 max-w-full">
              <Doughnut data={chartData} />
            </div>
            <div className="flex justify-center w-screen h-60 md:max-h-60 md:w-2/3 text-gray-950 max-w-full pt-4 md:pt-0">
              <Bar
                style={{ width: "100%", hiehgt: "100%" }}
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
