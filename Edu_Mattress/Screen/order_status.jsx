import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Modal } from "react-bootstrap";
const Order_status = () => {
  const [data, setdata] = useState([]);
  const nav = useNavigate();
  const [Sh0, setSh0] = useState(false);
  const [rating, setrating] = useState(5);
  const [Comment, setcomment] = useState("Type your comment here");
  const [customer_id, setcustomer_id] = useState("");
  const [product_id, setproduct_id] = useState("");

  const rate = Array.from({ length: rating }, (_, index) => index + 1);
  useEffect(() => {
    if (localStorage.getItem("type") === "customer") {
      var temp = { customer_id: localStorage.getItem("customer_id") };
      axios
        .post("http://127.0.0.1:5000/Mattress/order_info", temp)
        .then((res) => {
          setdata(res.data);
        })
        .catch(() => {
          alert("server error");
        });
    } else {
      nav("/login");
    }
  }, []);
  const revi = () => {
    var temp = [customer_id, product_id, Comment, rating];
    console.log(temp);
    axios
      .post("http://127.0.0.1:5000/Mattress/review_product", temp)
      .then((res) => {
        alert();
        setrating(5);
      })
      .catch(() => {
        alert("server error");
      });
  };
  return (
    <>
      {" "}
      <div className="bg">
        <div className="container-fluid ">
          <div className="myShadow headingmain">
            <p>
              {" "}
              <b> Edu_Mattress</b>
            </p>
          </div>
          <hr />
          <div className="bor0 p-3">
            <button
              className=" btn  btn-secondary m-2"
              onClick={() => nav("/home")}
            >
              Back
            </button>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>Product_id</th>
                  <th>Price</th>
                  <th>Payment_status</th>
                  <th>Delivery_status</th>
                  <th>ordered date</th>
                  <th>Delivery date</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{d[1]}</td>
                        <td>{d[2]}</td>
                        <td>{d[3]}</td>
                        <td>{d[4]}</td>
                        <td>{d[5]}</td>
                        <td>{d[6]}</td>

                        <td>
                          {d[4] === "delivered" && d[7] === "review" && (
                            <button
                              className="mb2 btn"
                              onClick={() => (
                                setSh0(true),
                                setcustomer_id(d[0]),
                                setproduct_id(d[1])
                              )}
                            >
                              Review
                            </button>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal show={Sh0} onHide={() => setSh0(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Comment Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            id=""
            cols="50"
            rows="5"
            className="form-control"
            value={Comment}
            onChange={(e) => setcomment(e.target.value)}
          />
          <p>Select your rating:</p>
          <h1>
            {rate.map((r) => {
              return (
                <>
                  <span
                    style={{
                      color: "yellow",

                      backgroundColor: "rgb(171, 177, 182)",
                    }}
                    onClick={() => setrating(r)}
                  >
                    {" "}
                    &#9733;
                  </span>
                </>
              );
            })}
          </h1>
          <button className="btn" onClick={() => setrating(5)}>
            Reset
          </button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSh0(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              revi();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order_status;
