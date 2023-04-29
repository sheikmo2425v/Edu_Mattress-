import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const [data, setdata] = useState([]);
  const nav = useNavigate();
  const [sh0, setsh0] = useState(-1);

  const [discount, setdiscount] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("type") === "admin") {
      getdata();
    } else {
      nav("/login");
    }
  }, []);
  const getdata = () => {
    axios.post("http://127.0.0.1:5000/Mattress/customer_info").then((res) => {
      setdata(res.data);
      console.log(res.data);
    });
  };
  const update = (e1) => {
    var temp = [e1, discount];
    axios
      .post("http://127.0.0.1:5000/Mattress/update_customer_info", temp)
      .then((res) => {
        getdata();
        setsh0(-1);
      });
  };
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
          <hr />
          <div className="bor0 p-3">
            <button
              className=" btn  btn-secondary m-2"
              onClick={() => nav("/admin")}
            >
              Back
            </button>
            <div>
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th>Custmoer_id</th>
                    <th>Orders</th>
                    <th>Discount</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => {
                    return (
                      <>
                        <tr key={i}>
                          <td>{d[0]}</td>
                          <td>{d[1]}</td>
                          <td>
                            {sh0 === i ? (
                              <input
                                type="text"
                                className="form-control "
                                style={{ width: "10%" }}
                                onChange={(e) => setdiscount(e.target.value)}
                                defaultValue={d[2]}
                              />
                            ) : (
                              d[2] + "%"
                            )}
                          </td>
                          <td>
                            {sh0 === i ? (
                              <button
                                className="btn btn-secondary"
                                onClick={() => update(d[0])}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                className="btn btn-secondary "
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
      </div>
    </>
  );
};

export default Customer;
