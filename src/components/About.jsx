import React from "react";
import Hero from "./Hero";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import banner from "@/assets/images/aboutus/about_hero.png";
import resurgex_story from "@/assets/images/aboutus/resurgex_story.png";
import strive_to_make_realm from "@/assets/images/aboutus/strive_to_make_realm.png";
import privacysafe from "@/assets/images/aboutus/privacysafe.svg";
import target_audience from "@/assets/images/aboutus/target_audience.svg";
import innovative_technology from "@/assets/images/aboutus/innovative_technology.svg";
import advance_algorithm from "@/assets/images/aboutus/advance_algorithm.svg"
import customer_first_approach from "@/assets/images/aboutus/customer_first_approach.svg"
import tech_focused from "@/assets/images/aboutus/tech_focused.svg"
import FooterCard from "./FooterCard";

function About() {
  const homeTitle = {
    small: "about Us",
    title: "We’re App Marketers Most Trusted Programmatic Companion",
    desc: "Over the years, we’ve enabled app marketers to achieve their retargeting goals by uniting their customers with their brands—and we can’t wait to do the same for you.",
    image: banner,
    cta: "Get in Touch",
  };

  return (
    <>
      <Helmet>
        <title>Our Story | ResurgeX</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/syin0m2gb/Favicon_ResurgeX_A_5Sj27yZ.svg?updatedAt=1720426288679"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Over the years, we’ve enabled app marketers to achieve their retargeting goals by uniting their customers with their brands—and we can’t wait to do the same for you."
        />
        <meta name="author" content="Resurgex.com" />
        <link rel="canonical" href={location} />
      </Helmet>
      <main>
        <Hero {...homeTitle} />
        <section>
          <div className="resurgexstory circlebg pb-110">
            <Container>
              <Row className="align-items-center justify-content-between">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="resurgexstory-wrap">
                    <h2 className="mb-3">
                      The{" "}
                      <span className="text-blue coloranimate">
                        ResurgeX Story
                      </span>
                    </h2>
                    <p>
                      ResurgeX by Mobavenue has been enabling app marketers to
                      leverage programmatic advertising solutions for
                      retargeting and engagement—turning around the most
                      challenging churn rate into a sustainable growth rate. We
                      aim to make you approachable to your target audience in a
                      way they like. Our growth specialists are always on the go
                      to deliver tangible and transparent results, adding value
                      throughout your retargeting campaign.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="resurgexstory-wrap">
                    <img
                      src={resurgex_story}
                      alt="the resurgex story"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div className="strive">
            <Container>
              <Row>
                <Col className="text-center">
                  <h2 className="mb-4 pb-md-3">
                    We’re Making{" "}
                    <span className="text-blue coloranimate">
                      Online Advertising Better
                    </span>
                  </h2>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={6} className="mb-2">
                  <div className="strive-left">
                    <img
                      src={strive_to_make_realm}
                      alt="strive to make realm"
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-2">
                  <div className="strive-right lineanimate">
                    <p className="mb-5">
                      At ResurgeX, we like to keep the open internet open and
                      make the world of online advertising a better place. We do
                      so by:
                    </p>
                    <ul className="p-0">
                      <li className="d-flex align-items-center mb-5">
                        <img
                          src={privacysafe}
                          alt="conversion"
                          className="img-fluid pe-3"
                          loading="lazy"
                        />
                        <p className="mb-0">
                          Creating solutions that come in a privacy-safe
                          ecosystem
                        </p>
                      </li>
                      <li className="d-flex align-items-center mb-5">
                        <img
                          src={target_audience}
                          alt="target audience"
                          className="img-fluid pe-3"
                          loading="lazy"
                        />
                        <p className="mb-0">
                          Captivating your target audience with personalized
                          experiences
                        </p>
                      </li>
                      <li className="d-flex align-items-center mb-5">
                        <img
                          src={innovative_technology}
                          alt="innovative technology"
                          className="img-fluid pe-3"
                          loading="lazy"
                        />
                        <p className="mb-0">
                          Crafting innovative technology solutions that fit the
                          best for your business
                        </p>
                      </li>
                    </ul>
                    <p className="mb-4">
                      We have fostered our organization's and our clients'
                      growth through unwavering dedication to these commitments.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div className="resurgeno line-bg pb-110 mb-4">
            <Container>
              <Row>
                <Col>
                  <h2 className="text-center pb-4 pb-md-5">
                    ResurgeX in{" "}
                    <span className="text-blue coloranimate">Numbers</span>
                  </h2>
                </Col>
              </Row>
              <div className="resurgeno-wrap text-center">
                <Row>
                  <Col md={4} className="mb-4">
                    <div className="resurgeno-wrap-block">
                      <h2 className="gradientheading">200+</h2>
                      <p className="font-14 mb-0">Global Clients</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="resurgeno-wrap-block borderx">
                      <h2 className="gradientheading">3+</h2>
                      <p className="font-14 mb-0">Years of Excellence</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="resurgeno-wrap-block">
                      <h2 className="gradientheading">300+</h2>
                      <p className="font-14 mb-0">Retargeting Campaigns</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
        <section>
            <div className="resurgefeatures text-center pb-110">
                <div className="container">
                    <Row>
                        <Col>
                            <h2 className="pb-4">We Take this to <span className="text-blue coloranimate">Our Heart</span></h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card className="cardup h-100">
                                <Card.Body className="py-5 px-4">
                                    <img src={advance_algorithm} alt="advance algorithm" className="img-fluid mb-4"/>
                                    <h4 className="mb-3">Customer-first Approach</h4>
                                    <p>Our customer-centric approach is the core of our value system, enabling us to transform our customers' unique challenges into tangible results.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="cardup h-100">
                                <Card.Body className="py-5 px-4">
                                    <img src={customer_first_approach} alt="customer first approach" className="img-fluid mb-4"/>
                                    <h4 className="mb-3">Data Matters the Most</h4>
                                    <p>To us, data reigns supreme. We develop the right strategies backed by trusted, transparent, and privacy-first data to help you make informed decisions.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card className="cardup h-100">
                                <Card.Body className="card-body py-5 px-4">
                                    <img src={tech_focused} alt="tech focused" className="img-fluid mb-4"/>
                                    <h4 className="mb-3">Tech-Focused</h4>
                                    <p>We work with the advent of technology, leveraging advanced machine learning and artificial intelligence into our processes.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
        <FooterCard title={<>See You on the <span className="text-blue coloranimate">ResurgeX Side</span></>} cta={<a href="#" onClick={(e) => e.preventDefault()} className="btn btn-gradient">Contact Us</a>} />
      </main>
    </>
  );
}

export default About;
