import axios from "axios";
import { useState, useEffect } from "react";
import { GraphDisplay } from "./YearlyEarningsDisplay";

export function RevenueIndex() {
  const [yearlyDepartmentEarnings, setYearlyDepartmentEarnings] = useState([]);

  const handleYearlyDepartmentEarnings = () => {
    axios.get("http://localhost:3000/yearly_department_earnings.json").then((response) => {
      // console.log(response.data);
      setYearlyDepartmentEarnings(response.data);
    });
  };

  useEffect(handleYearlyDepartmentEarnings, []);

  return (
    <div>
      <h2>Yearly Department Earnings</h2>
      <GraphDisplay yearlyDepartmentEarnings={yearlyDepartmentEarnings} />
    </div>
  );
}
