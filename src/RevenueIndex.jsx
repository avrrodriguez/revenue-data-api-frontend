import axios from "axios";
import { useState, useEffect } from "react";
import { GraphDisplay } from "./GraphDisplay";

export function RevenueIndex() {
  const [revenues, setRevenues] = useState([]);
  const [yearlyDepartmentEarnings, setYearlyDepartmentEarnings] = useState([]);

  const handleRevenueIndex = () => {
    axios.get("http://localhost:3000/revenues.json").then((response) => {
      // console.log(response.data);
      setRevenues(response.data);
    });
  };

  const handleYearlyDepartmentEarnings = () => {
    axios.get("http://localhost:3000/yearly_department_earnings.json").then((response) => {
      // console.log(response.data);
      setYearlyDepartmentEarnings(response.data);
    });
  };

  useEffect(handleRevenueIndex, []);
  useEffect(handleYearlyDepartmentEarnings, []);

  return (
    <div>
      <div>Word</div>
      {/* <div key={revenues[0].id}>{revenues[0].fy}</div> */}
      <GraphDisplay yearlyDepartmentEarnings={yearlyDepartmentEarnings} />
    </div>
  );
}
