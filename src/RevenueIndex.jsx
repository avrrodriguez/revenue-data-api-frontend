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
      <div>Yearly Department Earnings</div>
      <GraphDisplay yearlyDepartmentEarnings={yearlyDepartmentEarnings} />
    </div>
  );
}
