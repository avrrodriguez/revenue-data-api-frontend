import axios from "axios";
import { useState } from "react";

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
    handleOrganizationEarnings(department);
    event.target.reset();
  };

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
          <h2>Gottem</h2>
        </>
      ) : (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
}
