import axios from "axios";
import React, { useState, useEffect } from "react";

const Partners = () => {
  const [partner, setPartner] = useState();
  console.log(partner);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setPartner(response.data);
        console.log(setPartner);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!partner) return null;
  const { users, id, firstName, lastName, email, phone } = partner;

  return (
    <div className="partner-table">
      <table className="table table-striped table-hover">
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone number</th>
        </tr>
        {users.map((data) => {
          return (
            <tbody key={data.id}>
              <tr>
                <td>{data.id}</td>
                <td>{data.firstName}</td> <td>{data.lastName}</td>
                <td>{data.email}</td> <td>{data.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Partners;
