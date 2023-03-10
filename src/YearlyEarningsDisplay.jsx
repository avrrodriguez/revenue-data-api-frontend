import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

export function GraphDisplay(props) {
  useEffect(() => {
    console.log(props.yearlyDepartmentEarnings.length);
  }, [props.yearlyDepartmentEarnings]);

  var earningsData = (department) =>
    props.yearlyDepartmentEarnings
      .filter((earning) => earning["department_description"] === `${department}`)
      .map((earning) => {
        return earning["total_revenue"];
      });

  var departments = [];

  if (props.yearlyDepartmentEarnings.length > 0) {
    for (let i = 0; i < props.yearlyDepartmentEarnings.length; i++) {
      if (departments.includes(props.yearlyDepartmentEarnings[i]["department_description"]) === false) {
        departments.push(props.yearlyDepartmentEarnings[i]["department_description"]);
      }
    }
  }

  var dataDisplay = [];

  if (props.yearlyDepartmentEarnings.length > 0) {
    for (const i in departments) {
      dataDisplay.push({
        label: departments[i],
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: earningsData(departments[i]),
      });
    }
  }

  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };

  const data = {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "1013", "2014", "2015", "2016", "2017", "2018"],
    datasets: dataDisplay,
  };

  return (
    <div>
      {props.yearlyDepartmentEarnings.length > 0 ? (
        <>
          <Bar options={options} data={data} />
        </>
      ) : (
        <>
          <div>Not Loaded</div>
        </>
      )}
    </div>
  );
}
