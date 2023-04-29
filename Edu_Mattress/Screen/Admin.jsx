import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin_view_product from "../Componet/Admin_view_product";
import Loading from "../Componet/loading";
const Admin = () => {
  const nav = useNavigate();
  const [value, setvalue] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("type") !== "admin") {
      nav("/login");
    }
  }, []);
  if (value === 0) {
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
              <button className="btn  mb2 " onClick={() => nav("/add_product")}>
                Add_Product
              </button>

              <button
                className="btn  mb2 "
                onClick={() => nav("/customer_info")}
              >
                Customer
              </button>
              <button
                className="btn  mb2 "
                onClick={() => nav("/admin_order_info")}
              >
                Order
              </button>
              <button className="btn  mb2 " onClick={() => nav("/Login")}>
                Logout
              </button>
            </div>
            <hr className="my-3" />
            <div>
              <Admin_view_product />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Loading />
      </>
    );
  }
};

export default Admin;
