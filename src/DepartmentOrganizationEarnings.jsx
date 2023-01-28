import axios from "axios";
import { useState } from "react";
import { Bar } from "recharts";
import { Chart } from "chart.js/auto";

export function DepartmentOrganizationEarnings() {
  const [departmentOrganizationEarnings, setDepartmentOrganizationEarnings] = useState([]);
  const [department, setDepartment] = useState("");

  const handleOrganizationEarnings = (department) => {
    axios
      .get("http://localhost:3000/department_organizations_earnings.json", { params: { department } })
      .then((response) => {
        console.log(response.data);
        setDepartmentOrganizationEarnings(response.data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    setDepartment(params.values().next().value);
    console.log(department);
    handleOrganizationEarnings(department);
    event.target.reset();
  };

  var earningsData = [];

  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
  };

  const data = {
    labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "1013", "2014", "2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: "Police",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [12, 45, 23, 46, 78, 45, 23, 26, 36, 64, 1, 3, 12],
      },
      {
        label: "Lolol",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [12, 45, 23, 46, 78, 45, 23, 26, 36, 64, 1, 3, 12],
      },
    ],
  };

  console.log(departmentOrganizationEarnings.length);

  return (
    <div>
      <h2>Department Organization Earnings</h2>
      {department.length > 0 ? (
        <>
          <h3>Organization Earnings for department: {department}</h3>
        </>
      ) : (
        <>
          <h2>Organization Earnings for department</h2>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <label>Enter Department</label>
        <input name="department" type="text" />

        <button type="Submit">Submit</button>
      </form>

      <div>
        {departmentOrganizationEarnings.length > 0 ? (
          <>
            <Bar options={options} data={data} />
          </>
        ) : (
          <>
            <h2>Loading...</h2>
          </>
        )}
      </div>
    </div>
  );
}
