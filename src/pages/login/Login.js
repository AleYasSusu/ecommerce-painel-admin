import React, { useContext, useEffect, useState } from "react";
import pattern from "../../assets/images/backgroundLogin.webp";
import Logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <>
      <img src={pattern} className="loginPatern" alt="backgroud" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={Logo} width="60px" alt="login" />
            <h5 className="font-weight-bold">Login to Hotash</h5>
          </div>

          <div className="wrapper mt-3 card border p-4">
            <form>
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)}
                  autoFocus
                />
              </div>
              <div
                className={`form-group mb-3 position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="Enter your Password"
                  onFocus={() => focusInput(1)}
                  onBlur={() => setInputIndex(null)}
                />

                <span
                  className="toggleShowPassword"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>

              <div className="form-group">
                <Button className="btn-blue  btn-lg btn-big w-100">
                  Sign In
                </Button>
              </div>

              <div className="form-group text-center mt-3">
                <Link to="/forgot-password" className="link">
                  FORGOT PASSWORD
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
