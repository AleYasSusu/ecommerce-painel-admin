import React, { useState } from "react";
import DashboardBox from "./components/dashoboard/DashboardBox";
import { FaCircleUser } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import { GiStarsStack } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "@mui/material/Button";

import { MdOutlineTimer } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Chart } from "react-google-charts";
import TableProduct from "./components/dashoboard/TableProduct";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];
export const options = {
  backgroundColor: "transparent",
  chartArea: { width: "100%", height: "100%" },
};

const Dashboard = () => {
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaCircleUser />}
                Text={"Total Users"}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<BsFillCartCheckFill />}
                Text={"Total Orders"}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<FiShoppingBag />}
                Text={"Total Products"}
              />
              <DashboardBox
                color={["#e1950e", "#f3cd29"]}
                icon={<GiStarsStack />}
                Text={"Total Reviews"}
              />
            </div>
          </div>
          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex align-items-center justify-between w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Total Sales</h6>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}>
                    <BsThreeDotsVertical />
                  </Button>

                  <Menu
                    className="dropdown_menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <MdOutlineTimer />
                      Last day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MdOutlineTimer />
                      Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MdOutlineTimer />
                      Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MdOutlineTimer />
                      Last Year
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <h3 className="text-white font-bold">R$3,787,681.00</h3>
              <p>R$3,528,654.12 in last month</p>

              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height="170px"
              />
            </div>
          </div>
        </div>
        <h3 className="hd">Produtos mais vendidos</h3>
        <TableProduct />
      </div>
    </>
  );
};

export default Dashboard;
