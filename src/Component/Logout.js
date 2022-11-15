import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();
  const logout1 = () => {
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <div>
      {" "}
      <button type="submit" className="btn btn-primary" onClick={logout1}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
