
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SecondPageComponent from "../components/SecondPageComponent";
import DepartmentList from "../components/DepartmentList";

const departmentData = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");

    if (!name || !phone || !email) {
      setError("Please enter your details before accessing this page.");
      navigate("/first-page"); 
    }
  }, [navigate]);

  return (
    <div>
      <h2>Second Page</h2>
      {error && <div className="error-message">{error}</div>}
      <SecondPageComponent />
      <DepartmentList data={departmentData} />
    </div>
  );
};

export default SecondPage;
