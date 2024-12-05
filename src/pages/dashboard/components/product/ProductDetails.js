import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Chip } from "@mui/material";
import React, { useRef } from "react";
import Slider from "react-slick";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdFilterVintage } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaBoxes } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import UserAvatarImg from "../../../../components/userAvatarImg/UserAvatarImg";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { BsReply } from "react-icons/bs";

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

const ProductDetails = () => {

  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
  const productSliderBig = useRef();
  const productSliderSml = useRef();
  const goToSlide = (index) => {
      productSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Visualização do produto</h5>
          <Breadcrumbs aria-label="breadcrumb" className="breadcrumb_">
            <StyledBreadcrumb
              component="a"
              href=""
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />

            <StyledBreadcrumb component="a" href="#" label="Products" />

            <StyledBreadcrumb label="Product View" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Galeria de produto</h6>
                <Slider
                  {...productSliderOptions}
                  ref={productSliderBig}
                  className="sliderBig mb-2"
                >
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="teste"
                      className="w-100"
                    />
                  </div>
                </Slider>
                <Slider
                  {...productSliderSmlOptions}
                  ref={productSliderSml}
                  className="sliderSml"
                >
                  <div className="item" onClick={()=>goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt="Imagem 1"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt="Imagem 2"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt="Imagem 3"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Imagem 4"
                    />
                  </div>

                  <div className="item" onClick={()=>goToSlide(5)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Imagem 4"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(6)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Imagem 4"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(7)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Imagem 4"
                    />
                  </div>
                  <div className="item" onClick={()=>goToSlide(8)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt="Imagem 4"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-7">
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Detalhes do produto</h6>
                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>

                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdOutlineBrandingWatermark />
                      </span>
                      <span className="name">Marca</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Ecstasy</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategoryAlt />
                      </span>
                      <span className="name">Categoria</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Men's</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdFilterVintage />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>PARTY</span>
                          </li>
                          <li className="list-inline-item">
                            <span>DRESS</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SMART</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MAN</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <IoIosColorPalette />
                      </span>
                      <span className="name">Cor</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>
                          <li className="list-inline-item">
                            <span>BLUE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>WHITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>GREEN</span>
                          </li>
                          <li className="list-inline-item">
                            <span>PURPLE</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <BsFillCartFill />
                      </span>
                      <span className="name">Tamanho</span>
                    </div>
                    <div className="col-sm-9">
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SM</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MD</span>
                          </li>
                          <li className="list-inline-item">
                            <span>LG</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XL</span>
                          </li>
                          <li className="list-inline-item">
                            <span>XXL</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <RiMoneyDollarCircleLine />
                      </span>
                      <span className="name">Preço</span>
                    </div>
                    <div className="col-sm-9">
                      <span>Men's</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <FaBoxes />
                      </span>
                      <span className="name">Estoque</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(68)Peças</span>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <GiStarsStack />
                      </span>
                      <span className="name">Comentários</span>
                    </div>
                    <div className="col-sm-9">
                      <span>(03) Comentários</span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon">
                        <MdOutlinePublishedWithChanges />
                      </span>
                      <span className="name">Publicado</span>
                    </div>
                    <div className="col-sm-9">
                      <span>02 Fev 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h6 className="mt-4 mb-3">Descrição do produto</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              reprehenderit repellendus expedita esse cupiditate quos doloremque
              rerum, corrupti ab illum est nihil, voluptate ex dignissimos! Sit
              voluptatem delectus nam, molestiae, repellendus ab sint quo
              aliquam debitis amet natus doloremque laudantium? Repudiandae,
              consequuntur, officiis quidem quo deleniti, autem non laudantium
              sequi error molestiae ducimus accusamus facere velit consectetur
              vero dolore natus nihil temporibus aspernatur quia consequatur?
              Consequuntur voluptate deserunt repellat tenetur debitis molestiae
              doloribus dicta. In rem illum dolorem atque ratione voluptates
              asperiores maxime doloremque laudantium magni neque ad quae quos
              quidem, quaerat rerum ducimus blanditiis reiciendis
            </p>
            <br />

            <h6 className="mt-4 mb-4">Análise de classificação</h6>
            <div className="ratingSection">
              <div className="ratingGrow d-flex align-items-center">
                <span className="col1">5 Estrelas</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingGrow d-flex align-items-center">
                <span className="col1">4 Estrelas</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>
              <div className="ratingGrow d-flex align-items-center">
                <span className="col1">3 Estrelas</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(10)</span>
              </div>
              <div className="ratingGrow d-flex align-items-center">
                <span className="col1">2 Estrelas</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
              <div className="ratingGrow d-flex align-items-center">
                <span className="col1">1 Estrelas</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
            </div>

            <br />

            <h6 className="mt-4 mb-4">Avaliações de clientes</h6>
            <div className="reviewsSection">
              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center">
                        <UserAvatarImg
                          img={`https://mironcoder-hotash.netlify.app/images/avatar/01.webp`}
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h5>Miron Mahmud</h5>
                          <span>25 minutos atrás!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg ml-auto">
                        <BsReply /> &nbsp; Responder
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae reprehenderit repellendus expedita esse cupiditate
                    quos doloremque rerum, corrupti ab illum est nihil,
                    voluptate ex dignissimos! Sit voluptatem delectus nam,
                    molestiae, repellendus ab sint quo aliquam debitis amet
                    natus doloremque laudantium.
                  </p>
                </div>
              </div>

              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center">
                        <UserAvatarImg
                          img={`https://mironcoder-hotash.netlify.app/images/avatar/01.webp`}
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h5>Miron Mahmud</h5>
                          <span>25 minutos atrás!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg ml-auto">
                        <BsReply /> &nbsp; Responder
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae reprehenderit repellendus expedita esse cupiditate
                    quos doloremque rerum, corrupti ab illum est nihil,
                    voluptate ex dignissimos! Sit voluptatem delectus nam,
                    molestiae, repellendus ab sint quo aliquam debitis amet
                    natus doloremque laudantium.
                  </p>
                </div>
              </div>
              <div className="reviewRow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center">
                        <UserAvatarImg
                          img={`https://mironcoder-hotash.netlify.app/images/avatar/01.webp`}
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h5>Miron Mahmud</h5>
                          <span>25 minutos atrás!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg ml-auto">
                        <BsReply /> &nbsp; Responder
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae reprehenderit repellendus expedita esse cupiditate
                    quos doloremque rerum, corrupti ab illum est nihil,
                    voluptate ex dignissimos! Sit voluptatem delectus nam,
                    molestiae, repellendus ab sint quo aliquam debitis amet
                    natus doloremque laudantium.
                  </p>
                </div>
              </div>
              <div className="reviewRow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex flex-column">
                      <div className="userInfo d-flex align-items-center">
                        <UserAvatarImg
                          img={`https://mironcoder-hotash.netlify.app/images/avatar/01.webp`}
                          lg={true}
                        />
                        <div className="info pl-3">
                          <h5>Miron Mahmud</h5>
                          <span>25 minutos atrás!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                    <div className="ml-auto">
                      <Button className="btn-blue btn-lg ml-auto">
                        <BsReply /> &nbsp; Responder
                      </Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae reprehenderit repellendus expedita esse cupiditate
                    quos doloremque rerum, corrupti ab illum est nihil,
                    voluptate ex dignissimos! Sit voluptatem delectus nam,
                    molestiae, repellendus ab sint quo aliquam debitis amet
                    natus doloremque laudantium.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <h6 className="mt-4 mb-4">Formulário de resposta</h6>
            <form className="reviewForm">
              <textarea placeholder="Escreva aqui seu comentário "></textarea>

              <Button className="btn-big btn-blue btn-lg w-100  mt-4">
                Deixe Sua Resposta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
