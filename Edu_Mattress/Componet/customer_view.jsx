import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "./rating";
import { useNavigate } from "react-router-dom";

const Customer_view = (t) => {
  const [data, setdata] = useState([]);
  const [value, setValue] = useState(0);
  const [rating, setRating] = useState(0);
  const [price, setprice] = useState(5000);
  const [size, setsize] = useState(0);
  const [sh0, setsh0] = useState(false);
  const [sh1, setsh1] = useState(false);
  const [maindata, setmaindata] = useState([]);
  const [temppar, settemppar] = useState();
  const [leng, setleng] = useState();
  const nav = useNavigate();
  useEffect(() => {
    var temp = { customer_id: localStorage.getItem("customer_id") };
    axios
      .post("http://127.0.0.1:5000/Mattress/product_customer", temp)
      .then((res) => {
        discount(res.data);
        console.log(res.data);
      })
      .catch(() => {
        alert("server  error");
        setsh1(true);
      });
    // }
  }, []);
  const discount = (dta) => {
    var k = dta[0];
    const discount_price = [];
    dta[0].filter((e) => {
      const price = parseFloat(e[2]);

      var t = price - price * parseFloat(dta[1][0][2] / 100);
      discount_price.push(t);
    });
    const c = discount_price.map((num, i) => [...k[i], num]);
    console.log(c);
    setmaindata(c);

    setdata(c);
  };
  const filter = () => {
    var k = [price, size, rating];
    console.log(k);

    var tempdata = maindata.filter((item) => {
      var price = parseInt(item[2], 10);
      var rating = item[4];
      var size = item[6];

      return (
        price >= k[0] && price <= k[0] + 10000 && rating >= k[2] && size >= k[1]
      );
    });
    setdata(tempdata);
    console.log(data);
    if (tempdata.length === 0) {
      setsh1(true);
    } else {
      setsh1(false);
    }
  };
  if (value === 0) {
    return (
      <>
        <div className="bor0 p-3">
          <div className="head3">
            <p> Mattress</p>
          </div>
          <h6
            className=" btn  btn-secondary"
            style={{ position: "relative" }}
            onClick={() => setsh0(!sh0)}
          >
            {" "}
            {sh0 ? "close" : "Filter"}
          </h6>
          <br />
          <br />
          {sh0 && (
            <div className="filter   ">
              <button className="btn btn-dark" onClick={() => filter()}>
                Filter
              </button>
              <label htmlFor="">
                <b> Price range</b>
              </label>
              <input
                type="range"
                min="5000"
                max="100000"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
              <p>Price: {price}</p>
              <label htmlFor="">
                <b> Size range</b>
              </label>
              <input
                type="range"
                min="10"
                max="40"
                value={size}
                onChange={(e) => setsize(e.target.value)}
              />
              <p>Size: {size}</p>
              <label htmlFor="">
                <b> Rating range</b>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
              <p>Rating: {rating}</p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn btn-dark myShadow "
                  onClick={() => (
                    setprice(5000),
                    setRating(0),
                    setsize(0),
                    setdata(maindata),
                    setsh1(false)
                  )}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
          <div className=" grid-container m-2">
            {data.map((d) => {
              return (
                <div
                  className="grid-item"
                  onClick={() => nav("/View", { state: [d, maindata] })}
                >
                  <img src={" ./images/" + d[1] + ".jpg"} type="video/mp4" />
                  <h5>{d[1]}</h5>
                  <div>
                    <p>
                      <Rating maxRating={d[4]} />
                      {d[5]} reviews
                    </p>
                    <p>
                      ₹<strike> {d[2]} M.R.P </strike> ₹ {d[8]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>{" "}
          {sh1 && (
            <p
              style={{
                color: "black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              No result found
            </p>
          )}
        </div>
      </>
    );
  } else if (value === 1) {
    var t = temppar;
    return <></>;
  }
};

export default Customer_view;
