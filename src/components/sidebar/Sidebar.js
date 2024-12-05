import React from "react";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button className="w-100">
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Button className="w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Produtos
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div className="submenuWrapper">
              <ul className="submenu">
                <li>
                  <Link to="/products">Lista de Produtos</Link>
                </li>
                <li>
                  <Link to="/products/details">Visualizar Produto</Link>
                </li>
                <li>
                  <Link to="#">Cadastrar Produtos</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <BiSolidCategory />
                </span>
                Categorias
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <SiBrandfolder />
                </span>
                Marcas
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <FaCartArrowDown />
                </span>
                Pedidos
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <FaUser />
                </span>
                Usuários
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <MdMessage />
                </span>
                Mensagens
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notificações
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="#">
              <Button className="w-100">
                <span className="icon">
                  <IoMdSettings />
                </span>
                Setting
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
