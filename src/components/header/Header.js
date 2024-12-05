import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from "../searchBox/SearchBox";
import { MyContext } from "../../App";
import MenuHeader from "./MenuHeader";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const context = useContext(MyContext);
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/*logo wrapper*/}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={Logo} alt="Logo" />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button
                className="rounded-circle"
                onClick={() =>
                  context.setIsToggleSidebar(!context.isToggleSidebar)
                }
              >
                {context.isToggleSidebar === false ? 
                  <MdMenuOpen />
                 : 
                  <HiOutlineMenu />
                }
              </Button>
              <SearchBox />
            </div>

            <MenuHeader />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
