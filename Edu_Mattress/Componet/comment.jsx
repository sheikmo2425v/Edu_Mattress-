import axios from "axios";
import React, { useEffect, useState } from "react";

const Commments = (e) => {
  const [data, setdata] = useState([]);
  const [sh0, setsh0] = useState(false);
  console.log(e.value);
  useEffect(() => {
    var temp = [e.value];
    axios
      .post("http://127.0.0.1:5000/Mattress/comment", temp)
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
        if (res.data.length === 0) {
          setsh0(true);
        } else {
          setsh0(false);
        }
      })
      .catch(() => {
        alert("server  error");
        // setvalue(0);
      });
  }, [e.value]);
  return (
    <div className="bor5">
      <h6>Comments:</h6>
      {data.map((d) => {
        return (
          <>
            <div style={{ display: "inline-block" }}>
              <h5>
                {d[2]} {d[0]}&#9733;
              </h5>
            </div>
            <p>{d[1]}</p>
            <hr />
          </>
        );
      })}
      {sh0 && <p className="center">no comment found</p>}
    </div>
  );
};

export default Commments;
