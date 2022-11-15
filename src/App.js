import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SingelUser from "./Component/SingelUser";
import Users from "./Component/Users";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Home2 from "./Component/Home2";
import Servicess from "./Component/Servicess";
import Logout from "./Component/Logout";
import Clients from "./Component/Clients";
import PrivateRoute from "./Component/PrivateRoute";
import Partners from "./Component/Partners";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="user" element={<Users />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route path="post" element={<Servicess />}></Route>
        {/* <Route path="single" element={<SingelUser />}></Route> */}
        <Route path="partner" element={<Partners />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path="clients" element={<Clients />}></Route>
        </Route>
      </Routes>
      <Home2 />
      <Logout />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
