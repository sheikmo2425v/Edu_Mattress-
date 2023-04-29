import { Route, Routes } from "react-router-dom";
import Admin from "./Screen/Admin";
import Temp from "./Screen/Temp";
import Home from "./Screen/Home";
import Login from "./Screen/Login_reg";
import "./style/Main.css";
import Add_Product from "./Screen/Add_product";
import Full_view from "./Screen/full_view";
import Place_order from "./Screen/place_order";
import Order_status from "./Screen/order_status";
import Customer_view from "./Componet/customer_view";
import Customer from "./Screen/customer";
import Admin_order_info from "./Screen/admin_order_info";
import Admin_Full_view from "./Screen/Admin_full_view";
import Temp_Full_view from "./Screen/temp_full_view";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Temp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Add_product" element={<Add_Product />} />
        <Route path="/View" element={<Full_view />} />
        <Route path="/ViewA" element={<Admin_Full_view />} />
        <Route path="/Viewt" element={<Temp_Full_view />} />
        <Route path="/order_info" element={<Order_status />} />
        <Route path="/admin_order_info" element={<Admin_order_info />} />
        <Route path="/customer_info" element={<Customer />} />
      </Routes>
    </>
  );
};

export default Main;
