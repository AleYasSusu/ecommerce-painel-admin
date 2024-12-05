import React from "react";
import Rating from "@mui/material/Rating";
import { IoMdEye } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import BestSellingProduct from "./BestSellingProduct";
import { Link } from "react-router-dom";
const TableProduct = () => {
  return (
    <>
      <div className="card shadow border-0 p-3 mt-4">
        
        <BestSellingProduct />
        <div className="table-responsive">
          <table className="table table-bordered v-align">
            <thead className="thead-dark">
              <tr>
                <th>UID</th>
                <th style={{ width: "300px" }}>PRODUTO</th>
                <th>CATEGORIA</th>
                <th>MARCA</th>
                <th>PREÇO</th>
                <th>ESTOQUE</th>
                <th>AVALIAÇÃO</th>
                <th>PEDIDOS</th>
                <th>VENDAS</th>
                <th>AÇÃO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                   <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#1</td>
                <td>
                  <div className="d-flex productBox">
                    <div className="imgWrapper">
                      <div className="img">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/product/01.webp"
                          alt="teste"
                          className="w-100"
                        />
                      </div>
                    </div>
                    <div className="info pl-0">
                      <h6>Tops and skirt set for Femele...</h6>
                      <p>
                        Women's exclusive summer Tops and skirt set for Female
                        Tops and skirt set
                      </p>
                    </div>
                  </div>
                </td>
                <td>womans</td>
                <td>richman</td>
                <td>
                  <div style={{ width: "100px" }}>
                    <del className="old">R$21.00</del>
                    <span className="new text-danger">R$20.00</span>
                  </div>
                </td>
                <td>30</td>
                <td>
                  <Rating name="read-only" value={5} readOnly size="small" />
                </td>
                <td>320</td>
                <td>R$38,000.00</td>
                <td>
                  <div className="actions d-flex align-item-center">
                  <Link to="/product/details">
                   <Button className="secondary" color="secondary">
                      <IoMdEye />
                    </Button>
                   </Link>
                    <Button className="success" color="success">
                      <MdModeEditOutline />
                    </Button>
                    <Button className="error" color="error">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex tableFooter">
            <p>
              showing <b> 12 </b> of <b>60</b> results
            </p>
            <Pagination
              count={10}
              color="primary"
              className="pagination"
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableProduct;
