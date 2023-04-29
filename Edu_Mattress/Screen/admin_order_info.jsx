import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin_order_info = () => {
  const [data, setdata] = useState([]);
  const [sh0, setsh0] = useState(-1);

  const [Payment, setpayment] = useState("pending");
  const [Delivery, setdelivery] = useState("pending");
  const nav = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("type") === "admin") {
      getdata();
    } else {
      nav("/login");
    }
  }, []);
  const getdata = () => {
    axios
      .post("http://127.0.0.1:5000/Mattress/Admin_order_info")
      .then((res) => {
        setdata(res.data);
      });
  };
  const update = (e1, e2, e3) => {
    var temp = [e1, e2, Payment, Delivery, e3];
    axios
      .post("http://127.0.0.1:5000/Mattress/update_order_info", temp)
      .then((res) => {
        getdata();
        setsh0(-1);
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
              onClick={() => nav("/admin")}
            >
              Back
            </button>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th>customer_id</th>
                  <th>Product_id</th>
                  <th>Price</th>
                  <th>Payment_status</th>
                  <th>Delivery_status</th>
                  <th>ordered date</th>
                  <th>Delivery date</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => {
                  return (
                    <>
                      {" "}
                      <tr key={i}>
                        <td>{d[0]}</td> <td>{d[1]}</td>
                        <td>{d[2]}</td>
                        <td>
                          {sh0 === i ? (
                            <input
                              type="text"
                              defaultValue={d[3]}
                              onChange={(e) => setpayment(e.target.value)}
                              className="form-control"
                            />
                          ) : (
                            d[3]
                          )}
                        </td>
                        <td>
                          {sh0 === i ? (
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setdelivery(e.target.value)}
                              defaultValue={d[4]}
                            />
                          ) : (
                            d[4]
                          )}
                        </td>
                        <td>{d[5]}</td>
                        <td>{d[6]}</td>
                        <td>
                          {sh0 === i ? (
                            <button
                              className="btn btn-secondary"
                              onClick={() => update(d[0], d[1], d[5])}
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              className="btn btn-secondary"
                              onClick={() => setsh0(i)}
                            >
                              Edit
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
    </>
  );
};

export default Admin_order_info;
