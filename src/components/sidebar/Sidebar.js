import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState(0);

  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 0 ? "active" : ""}`}>
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
            <Button
              className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? "active" : ""}`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Produtos
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="/products">Lista de Produtos</Link>
                </li>
                <li>
                  <Link to="product/details">Visualizar Produto</Link>
                </li>
                <li>
                  <Link to="#">Cadastrar Produtos</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? "active" : ""}`}
              onClick={() => isOpenSubmenu(3)}
            >
              <span className="icon">
                <BiSolidCategory />
              </span>
              Categorias
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 3 && isToggleSubmenu === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Lista de Categorias</Link>
                </li>
                <li>
                  <Link to="#">Visualizar Categoria</Link>
                </li>
                <li>
                  <Link to="#">Cadastrar Categoria</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Button
              className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? "active" : ""}`}
              onClick={() => isOpenSubmenu(4)}
            >
              <span className="icon">
                <SiBrandfolder />
              </span>
              Marcas
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 4 && isToggleSubmenu === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Lista de Marcas</Link>
                </li>
                <li>
                  <Link to="#">Visualizar Marca</Link>
                </li>
                <li>
                  <Link to="#">Cadastrar Marca</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="#">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(4)}
              >
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
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(5)}
              >
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
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(6)}
              >
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
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(7)}
              >
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
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Configurações
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
