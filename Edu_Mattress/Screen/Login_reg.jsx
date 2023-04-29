import axios from "axios";
import { Alert } from "bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [rpassword, setrpassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [sh, setsh] = useState(["", "none"]);
  const login = () => {
    if (Email != "" && password != "") {
      var temp = { Email: Email, password: password };
      axios.post("http://127.0.0.1:5000/Mattress/login", temp).then((res) => {
        if (res.data[1].length === 0) {
          alert("no user found");
        } else if (res.data[0] === "admin") {
          setEmail("");
          setpassword("");
          localStorage.setItem("type", "admin");
          localStorage.setItem("data", res.data[1]);
          nav("/admin");
        } else if (res.data[0] === "customer") {
          setEmail("");
          setpassword("");
          localStorage.setItem("type", "customer");
          localStorage.setItem("customer_id", res.data[1][0][1]);
          localStorage.setItem("customer_name", res.data[1][0][0]);
          console.log(res.data[1][0][1]);
          nav("/Home");
        }
      });
    } else {
      alert("Please fill out all the field");
    }
  };
  useEffect(() => {
    localStorage.clear();
  }, []);
  const signup = () => {
    if (Email != "" && password != "" && rpassword != "" && username != "") {
      if (password === rpassword) {
        setErrorMessage("");
        var temp = { Email: Email, password: password, name: username };
        axios
          .post("http://127.0.0.1:5000/Mattress/signup", temp)
          .then((res) => {
            console.log(res.data);
            if (res.data.length === "Account created successfully") {
              alert("Account created successfully ");
              setsh(["", "none"]);
              setEmail("");
              setpassword("");
              setrpassword("");
              setusername("");
            }
          });
      } else {
        setErrorMessage("password is not matched");
      }
    } else {
      alert("Please fill out all the field");
    }
  };

  return (
    <>
      <div className="bg">
        <div className="container ">
          <div className="myShadow headingmain">
            <p>
              {" "}
              <b> Edu_Mattress</b>
            </p>
          </div>
          <div
            className="row justify-content-center wrapper"
            id="login-box"
            style={{ display: sh[0] }}
          >
            <div className="col-lg-10 my-auto myShadow">
              <div className="row">
                <div className="col-lg-7 bg-white p-4">
                  <h1 className="text-center font-weight-bold text-primary">
                    Login
                  </h1>
                  <hr className="my-3" />

                  <div className="input-group input-group-lg form-group">
                    <input
                      type="email"
                      id="email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control rounded-0"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div className="input-group input-group-lg form-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="form-control rounded-0"
                      minLength="5"
                      placeholder="Password"
                      autoComplete="off"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="submit"
                      onClick={login}
                      className="btn btn-primary btn-lg align-self-center mb "
                    />
                  </div>
                </div>
                <div className="col-lg-5 d-flex flex-column justify-content-center myColor p-4">
                  <h1 className="text-center font-weight-bold text-white">
                    Hiii
                  </h1>
                  <hr className="my-3 bg-light myHr" />
                  <p className="text-center font-weight-bolder text-light lead">
                    If you need to create an account use below signup button
                  </p>
                  <button
                    onClick={() => setsh(["none", ""])}
                    className="btn btn-outline-light btn-lg align-self-center font-weight-bolder mt-4 myLinkBtn"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center wrapper"
            id="register-box"
            style={{ display: sh[1] }}
          >
            <div className="col-lg-10 my-auto myShadow">
              <div className="row">
                <div className="col-lg-5 d-flex flex-column justify-content-center myColor p-4">
                  <h1 className="text-center font-weight-bold text-white">
                    Welcome Back!
                  </h1>
                  <hr className="my-4 bg-light myHr" />
                  <p className="text-center font-weight-bolder text-light lead">
                    To keep connected with us please login with your personal
                    info.
                  </p>
                  <button
                    className="btn btn-outline-light btn-lg font-weight-bolder mt-4 align-self-center myLinkBtn"
                    onClick={() => setsh(["", "none"])}
                  >
                    Sign In
                  </button>
                </div>
                <div className="col-lg-7 bg-white p-4">
                  <h1 className="text-center font-weight-bold text-primary">
                    Create Account
                  </h1>
                  <hr className="my-3" />

                  <div className="input-group input-group-lg form-group">
                    <input
                      type="text"
                      id="name"
                      value={username}
                      className="form-control rounded-0"
                      placeholder="Full Name"
                      onChange={(e) => setusername(e.target.value)}
                    />
                  </div>
                  <div className="input-group input-group-lg form-group">
                    <input
                      type="email"
                      id="remail"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control rounded-0"
                      placeholder="E-Mail"
                    />
                  </div>
                  <div className="input-group input-group-lg form-group">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="form-control rounded-0"
                      placeholder="Password"
                    />
                  </div>
                  <div className="input-group input-group-lg form-group">
                    <input
                      type="password"
                      id="cpassword"
                      value={rpassword}
                      onChange={(e) => setrpassword(e.target.value)}
                      className="form-control rounded-0"
                      minLength="5"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <div className="text-danger font-weight-bolder">
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      id="register-btn"
                      onClick={signup}
                      className="btn btn-primary btn-lg btn-block myBtn"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row justify-content-center wrapper"
            id="forgot-box"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Login;
