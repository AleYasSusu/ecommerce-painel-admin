import { Button } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import React, { useContext,  useEffect,  useState } from "react";
import { MyContext } from "../../App";
import pattern from "../../assets/images/backgroundLogin.webp";
import Logo from "../../assets/images/logo.png";
import { FaCircleUser } from "react-icons/fa6";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [catBy, setCatBy] = useState("");
  const context = useContext(MyContext);
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIShowConfirmPassword] = useState(false);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
    window.scrollTo(0,0);
  }, [context]);

  const focusInput = (index) => {
    setInputIndex(index);
  };
  return (
    <>
      <img src={pattern} className="loginPatern" alt="backgroud" />
      <section className="loginSection signUpSection">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
            <h1>THE BEST FASHION <span className="text-sky">ECOMMERCE ADMINISTRATION</span> DASHBOARD UX/UI</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="w-100 mt-4">
              <Link to={'/'}>
              <Button className="btn-blue btn-lg btn-big">
                <FaHouse />
                Voltar Para Pagina Principal
              </Button>
              </Link>
            </div>
          </div>

          <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={Logo} width="60px" alt="login" />
                <h5 className="font-weight-bold">Register a new account</h5>
              </div>

              <div className="wrapper mt-3 card border p-4">
                <form>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaCircleUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
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
                      <MdEmail />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your Email"
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>

                  <div
                    className="form-group mb-3"
                    style={{ background: "white" }}
                  >
                    <FormControl size="small" className="w-100">
                      <Select
                        displayEmpty
                        value={catBy}
                        className="W-100"
                        inputProps={{ "aria-label": "Without label" }}
                        id="demo-simple-select-helper"
                        onChange={(e) => setCatBy(e.target.value)}
                      >
                        <MenuItem value="">
                          <em>Select Category</em>
                        </MenuItem>
                        <MenuItem value={10}>Admin</MenuItem>
                        <MenuItem value={20}>Salesperson</MenuItem>
                        <MenuItem value={30}>Assistant</MenuItem>
                        <MenuItem value={40}>Shipper</MenuItem>
                        <MenuItem value={50}>Editor</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={`${isShowPassword === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="Enter Password"
                      onFocus={() => focusInput(3)}
                      onBlur={() => setInputIndex(null)}
                    />

                    <span
                      className="toggleShowPassword"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                    >
                      {isShowPassword === true ? <IoMdEyeOff /> : <IoMdEye />}
                    </span>
                  </div>
                  <div
                    className={`form-group mb-3 position-relative ${
                      inputIndex === 4 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={`${
                        isShowConfirmPassword === true ? "text" : "password"
                      }`}
                      className="form-control"
                      placeholder="Confirm Password"
                      onFocus={() => focusInput(4)}
                      onBlur={() => setInputIndex(null)}
                    />

                    <span
                      className="toggleShowPassword"
                      onClick={() =>
                        setIShowConfirmPassword(!isShowConfirmPassword)
                      }
                    >
                      {isShowConfirmPassword === true ? (
                        <IoMdEyeOff />
                      ) : (
                        <IoMdEye />
                      )}
                    </span>
                  </div>

                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="I agree to the all Terms & Condiotions"
                  />

                  <div className="form-group">
                    <Button className="btn-blue  btn-lg btn-big w-100">
                      Sign In
                    </Button>
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

export default SignUp;
