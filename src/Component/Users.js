import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setUsers(response.data);
        console.log(setUsers);
      })
      .catch((error) => {
        console.error();
      });
  }, []);
  if (!users) return null;
  const { data, id, email, first_name, avatar } = users;
  return (
    <div className="user-box">
      {data.map((user) => {
        return (
          <div className="row row-cols-1 row-cols-md-2 g-4 fl" key={user.id}>
            <div className="col mark">
              <div className="card">
                <img src={user.avatar} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{user.first_name}</h5>
                  <p className="card-text">{user.email}</p>
                  <Link to={`/single/${user.id}`}>View more</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
