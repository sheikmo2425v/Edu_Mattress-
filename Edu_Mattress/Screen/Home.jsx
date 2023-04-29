import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admin_view_product from "../Componet/Admin_view_product";
import Customer_view from "../Componet/customer_view";
const Home = () => {
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("type") === "customer") {
    } else {
      nav("/login");
    }
  }, []);
  return (
    <>
      <div className="bg">
        <div className="container-fluid ">
          <div className="myShadow headingmain">
            <p>
              {" "}
              <b> Edu_Mattress</b>
            </p>
          </div>
          <div className="heading btn-group mb2">
            <button className="btn  mb2 " onClick={() => nav("/login")}>
              logout
            </button>

            <button className="btn  mb2 " onClick={() => nav("/order_info")}>
              Order
            </button>
          </div>
          <hr className="my-3" />
          <div>
            <Customer_view />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
