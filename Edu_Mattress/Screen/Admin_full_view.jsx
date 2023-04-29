import { Carousel } from "react-bootstrap";
import Rating from "../Componet/rating";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import axios from "axios";
import SuggestionA from "../Componet/suggestionA";
import Commments from "../Componet/comment";
const Admin_Full_view = () => {
  const targetRef = useRef(null);
  const a = [0, 1, 2, 3];
  const [value, setvalue] = useState(0);
  const [im, setim] = useState("");
  const { state } = useLocation();
  const nav = useNavigate();
  console.log(state);

  useLayoutEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state]);
  const buy = () => {
    setvalue(1);
    if (
      localStorage.getItem("type") !== "customer" ||
      localStorage.getItem("type") !== "customer"
    ) {
      nav("/Login");
    } else {
      if (state[0][3] !== 0) {
        var temp = [
          localStorage.getItem("customer_id"),
          state[0][0],
          state[0][8],
        ];
        axios
          .post("http://127.0.0.1:5000/Mattress/order_product", temp)
          .then((res) => {
            alert("order ordered successfully ");

            nav("/home");
          });
      } else {
        setvalue(0);
        alert("Sorry out of stock");
      }
    }
  };
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
            <div className="bor0 p-3" ref={targetRef}>
              <button
                className=" btn  btn-secondary "
                onClick={() => nav("/admin")}
              >
                Back
              </button>{" "}
              <hr />
              {im && (
                <div className=" fullscreen" onClick={() => setim(false)}>
                  <img src={im} alt="csd" />
                </div>
              )}
              <div className="container-fluid ">
                <div className=" row">
                  <div className="col-lg-6">
                    <Carousel>
                      {a.map((a_) => {
                        var k = "./images/" + state[0][1] + "/" + a_ + ".jpg";

                        return (
                          <Carousel.Item>
                            <img
                              src={k}
                              className="img_side"
                              alt={a_}
                              onClick={() => setim(k)}
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>{" "}
                  </div>
                  <div className="col">
                    <h5>{state[0][1]}</h5>
                    <div>
                      <p>
                        <Rating maxRating={state[0][4]} />
                        {state[0][5]} reviews
                      </p>
                      <p> ₹{state[0][2]} M.R.P</p>
                      <div>
                        <button className="btn btn-dark " onClick={buy}>
                          Buy_Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <Commments value={state[0][0]} />
                  </div>
                </div>
              </div>
              <hr className="my-3" />
              <div>
                <SuggestionA value={state[1]} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (value === 1) {
    return <></>;
  }
};

export default Admin_Full_view;
