import { useState } from "react";
import Rating from "./rating";

import Temp_view from "./temp_view";
import { useNavigate } from "react-router-dom";

const SuggestionT = (t) => {
  const data = t.value;
  const [temppar, settemppar] = useState();
  const [value, setValue] = useState(0);
  const nav = useNavigate();
  const maindata = data;
  if (value === 0) {
    return (
      <>
        <div className="bor0 p-3">
          <div className="head3">
            <p>Mattress</p>
          </div>
          <br />
          <br />
          <div className=" grid-container m-2">
            {data.map((d) => {
              return (
                <div
                  className="grid-item"
                  onClick={() => nav("/ViewT", { state: [d, maindata] })}
                >
                  <img src={" ./images/" + d[1] + ".jpg"} type="video/mp4" />
                  <h5>{d[1]}</h5>
                  <div>
                    <p>
                      <Rating maxRating={d[4]} />
                      {d[5]} reviews
                    </p>
                    <p>₹ {d[2]} M.R.P</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    var t = [temppar, data];
    return (
      <div className="bor0 p-3">
        <button className=" btn  btn-secondary " onClick={() => setValue(0)}>
          Back
        </button>
        <hr />
        <Temp_view value={t} />
      </div>
    );
  }
};

export default SuggestionT;
