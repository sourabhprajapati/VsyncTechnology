import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/footer/Footer";
import Logout from "./pages/Logout";
import AdminLayout from "./components/layouts/Admin-layouts";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  {/* Fixed: removed space */}
          <Route path="/service" element={<Service />} />  {/* Fixed: lowercase to match NavLink */}
          <Route path="/register" element={<Register />} />  {/* Fixed: lowercase to match NavLink */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/logout" element={<Logout/>} /> 
          <Route path="*" element={<Error />} /> 
          <Route path="/admin" element={<AdminLayout/>}>
               <Route path="users" element={<AdminUsers/>}/>
               <Route path="contacts" element={<AdminContacts/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;