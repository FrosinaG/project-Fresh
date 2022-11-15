// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";

// const SingelUser = ({ user }) => {
//   let { id } = useParams();
//   let location = useLocation();
//   const [single, setSingle] = useState();

//   console.log(useParams());
//   console.log("location", location);

//   useEffect(() => {
//     axios
//       .get(`https://reqres.in/api/users/${id}`)
//       .then((data) => setSingle(data.data));
//   }, [id]);
//   if (!single) return null;
//   // const { email, first_name, avatar } = single;
//   return (
//     <div key={single.id}>
//       <p>email{single.email}</p>
//       <p>email{single.first_name}</p>
//       <p>sdghjh</p>
//     </div>
//   );
// };

// export default SingelUser;
