import { useState } from "react";
import "./Add.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [values, setValues] = useState({
    name: "",
    brand: "",
    code: "",
    comment: "",
    price: "",
    priceSale: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products`,
        values
      );
      console.log(res);
      navigate("/products");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Add1">
      <div className="conatiner">
        <div className="big1">
          <div className="add-content2">
            <form onSubmit={handleSubmit}>
              <div className="inpt">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control inpt1"
                  required
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                />
              </div>
              <div className=" inpt2">
                <div className="in1">
                  <label htmlFor="brand">Brand</label>
                  <input
                    type="text"
                    name="brand"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, brand: e.target.value })
                    }
                  />
                </div>

                <div className="in1">
                  <label htmlFor="code">Article</label>
                  <input
                    type="text"
                    name="code"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, code: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="inpt">
                <label htmlFor="comment">comment</label>
                <textarea
                  type="textarea"
                  name="comment"
                  as="textarea"
                  className="form-control comment"
                  required
                  onChange={(e) =>
                    setValues({ ...values, comment: e.target.value })
                  }
                />
              </div>

              <div className="last">
                <div className="in1">
                  <label htmlFor="price">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, price: e.target.value })
                    }
                  />
                </div>

                <div className="in1">
                  <label htmlFor="priceSale">priceSale</label>
                  <input
                    type="text"
                    name="priceSale"
                    className="form-control inpt1"
                    required
                    onChange={(e) =>
                      setValues({ ...values, priceSale: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="btns">
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
