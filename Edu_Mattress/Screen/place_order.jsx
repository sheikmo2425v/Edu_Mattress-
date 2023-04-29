import { useLocation } from "react-router-dom";
import Rating from "../Componet/rating";
const Place_order = () => {
  const name = localStorage.getItem("customer_name");
  const id = localStorage.getItem("customer_id");
  const { state } = useLocation();
  console.log(state);
  var k = "./images/" + state[1] + ".jpg";
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
          <div className="bor1">
            <div className="bor0 p-3 ">
              <div>
                <h4 className="p-2  ">
                  <img
                    src={k}
                    className="img_icon m-2"
                    onClick={() => setim(k)}
                  />
                  <b>{state[1]}</b>
                </h4>

                <p>₹ {state[2]} M.R.P</p>
                <div>
                  <button className="btn btn-dark ">Place order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place_order;
