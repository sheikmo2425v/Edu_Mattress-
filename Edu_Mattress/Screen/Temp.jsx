import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Temp_view from "../Componet/temp_view";
import Loading from "../Componet/loading";

const Temp = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("type") === "customer") {
      nav("/Home");
    } else if (localStorage.getItem("type") === "admin") {
      nav("/Admin");
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
            <button className="btn  mb2 " onClick={() => nav("/Login")}>
              Login
            </button>
          </div>
          <hr className="my-3" />
          <div>
            <Temp_view />
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
