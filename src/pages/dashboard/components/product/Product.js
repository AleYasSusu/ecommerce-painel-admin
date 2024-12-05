import React from "react";
import TableProduct from "../dashoboard/TableProduct";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Chip } from "@mui/material";

//Breadcrumbs code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  const textColor =
    theme.palette.mode === "light"
      ? theme.palette.text.primary
      : theme.palette.common.white; // Força o texto a ser branco no modo escuro

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: textColor,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});
const Product = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Lista de Produtos</h5>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_">
            <StyledBreadcrumb
              component="a"
              href=""
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb component="a" href="#" label="Products" />
          </Breadcrumbs>
        </div>

        <TableProduct />
      </div>
    </>
  );
};

export default Product;
