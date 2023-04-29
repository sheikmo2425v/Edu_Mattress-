import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add_Product = () => {
  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [tproduct, settproduct] = useState();
  const [file, setFile] = useState("");
  const [files, setFiles] = useState("");
  const nav = useNavigate();
  const add = () => {
    if (
      name !== "" &&
      file !== "" &&
      price !== "" &&
      tproduct !== "" &&
      files !== ""
    ) {
      const formData = new FormData();
      files.forEach((mfile) => {
        formData.append("mfile", mfile);
      });
      formData.append("file", file);

      formData.append("name", name);
      formData.append("price", price);
      formData.append("tproduct", tproduct);

      axios
        .post("http://127.0.0.1:5000/Mattress/store_product", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    } else {
      alert("Please fill out all the field");
    }
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
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
          <button className="btn mb2" onClick={() => nav("/admin")}>
            Back
          </button>
          <div className="heading myShadow  d-flex justify-content-center">
            <div className="row d-flex justify-content-center adp ">
              <div className="col-lg-8 my-auto ">
                <div className="row">
                  <div className="col-lg-12 bg-white p-4">
                    <h4 className="text-center font-weight-bold text-primary">
                      Add Product
                    </h4>
                    <hr className="my-3" />
                    <div className="input-group input-group-lg form-group">
                      <input
                        type="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="form-control rounded-0"
                        placeholder="Product Name"
                      />
                    </div>{" "}
                    <div className="input-group input-group-lg form-group">
                      <input
                        type="number"
                        value={tproduct}
                        onChange={(e) => settproduct(e.target.value)}
                        className="form-control rounded-0"
                        placeholder="How many product"
                      />
                    </div>
                    <div className="input-group input-group-lg form-group">
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        className="form-control rounded-0"
                        placeholder="price"
                      />
                      <div className="input-group input-group-lg form-group ">
                        <div className="form-control rounded-0">
                          <label htmlFor="fileInput" className="  ">
                            Select thumbnail Image :
                          </label>
                          <input
                            type="file"
                            id="fileInput"
                            accept=".jpg,.png,.jpeg"
                            onChange={handleChange}
                            className=" form-control rounded-0  btn btn-dark "
                            placeholder="Add thumbnail pic"
                          />
                        </div>
                      </div>
                      <hr />{" "}
                      <div className="input-group input-group-lg form-group ">
                        <div className="form-control rounded-0">
                          <label htmlFor="filesInput ">
                            Select up to 4 Images :
                          </label>
                          <input
                            type="file"
                            id="filesInput"
                            multiple
                            className=" form-control rounded-0 btn btn-dark"
                            accept=".jpg,.png,.jpeg"
                            onChange={(e) => {
                              const select = [...e.target.files];
                              if (select.length !== 4) {
                                alert("Please select up to 4 files .");
                                return;
                              } else {
                                setFiles(select);
                              }
                            }}
                            title="Select files"
                          />
                        </div>
                      </div>
                      <div className="input-group input-group-lg form-group">
                        <button className=" btn mb" onClick={add}>
                          {" "}
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Product;
