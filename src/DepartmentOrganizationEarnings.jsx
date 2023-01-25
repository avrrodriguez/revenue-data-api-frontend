import axios from "axios";
import { useState } from "react";

export function DepartmentOrganizationEarnigns() {
  const [departmentOrganizationEarnings, setDepartmentOrganizationEarnings] = useState([]);

  const handleOrganizationEarnings = (department) => {
    axios.get("http://localhost:3000/department_organizations_earnings.json", department).then((response) => {
      console.log(response.data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    event.target.reset;
  };

  return (
    <div>
      <p>asd</p>
      <form onSubmit={handleSubmit}>
        <label>Enter Department</label>
        <input name="department" type="text" />

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}
