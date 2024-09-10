import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import arrowUp from "@/assets/images/arrow_up_right.svg";
import arrowDwn from "@/assets/images/down_arrow.gif";

function Hero({ small, title, desc, image, cta }) {
  // console.log(homeTitle)

  return (
    <section>
      <div className="hero mb-5 text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-5 mb-md-0">
              <div className="hero-left">
                <span className="d-block font-14 font-700 mb-2 text-light-blue text-uppercase">
                  {small}
                </span>
                <h1 className="mb-3">{title}</h1>
                <p className="mb-4 pb-2">{desc}</p>
                {location.pathname !== "/contact" && (
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="btn btn-blue d-inline-flex align-items-center"
                  >
                    <span className="me-2">{cta}</span>
                    <img
                      src={arrowUp}
                      alt="arrow up"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </a>
                )}
              </div>
            </Col>
            <Col md={6}>
              <div className="hero-right">
                <img
                  src={image}
                  alt={small}
                  className="img-fluid w-100"
                  loading="lazy"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="hero-down-arrow">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <img
              src={arrowDwn}
              alt="down arrow"
              className="img-fluid"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
