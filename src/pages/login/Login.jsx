import React from "react";
import "./Login.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login">
        <div className="container">
          <div className="big">
            <div className="cart">
              <div className="card-content">
                <form className="btnn">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                    required
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                  />

                  <div className="btns">
                    <NavLink to={"/products"}>
                      <button className="btn1">login</button>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
