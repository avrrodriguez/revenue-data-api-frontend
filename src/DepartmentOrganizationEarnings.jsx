import axios from "axios";
import { useState } from "react";
import { Bar } from "recharts";
import { Chart } from "chart.js/auto";

export function DepartmentOrganizationEarnigns() {
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
    datasets: {
      label: "Police",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: earningsData,
    },
  };

  // console.log(departmentOrganizationEarnings.length);

  return (
    <div>
      {department.length > 0 ? (
        <>
          <h2>Organization Earnings for department: {department}</h2>
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

      {departmentOrganizationEarnings.length > 0 ? (
        <>
          <Bar option={options} data={data} />
        </>
      ) : (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
}
