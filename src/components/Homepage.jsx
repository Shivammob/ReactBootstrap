import React from "react";
import { Helmet } from 'react-helmet-async';
import Hero from "./Hero";
import { Card, Col, Container, Row } from "react-bootstrap";
import banner from "@/assets/images/homepage_banner.png";
import activate from "@/assets/images/activate.png";
import circle_bg from "@/assets/images/circle_bg.png";
import retarget from "@/assets/images/retarget.png";
import re_engage from "@/assets/images/re_engage.png";
import conversion from "@/assets/images/conversion.svg";
import metrices from "@/assets/images/metrics.svg";
import creatives from "@/assets/images/creatives.svg";
import in_app_engagement from "@/assets/images/in_app_engagement.svg";
import ad_budget from "@/assets/images/ad_budget.svg";
import retargeting_delivers from "@/assets/images/retargeting_delivers.png";
import creative_studio from "@/assets/images/creative_studio.svg";
import algorithm from "@/assets/images/algorithm.svg";
import granular_reporting from "@/assets/images/granular_reporting.svg";
import Slider from "./slider/Slider";
import FooterCard from "./FooterCard";

function Homepage() {
  const homeTitle = {
    small: "Retargeting Powered by Advanced Machine Learning",
    title: "Drive Engagement, Boost Conversions and Maximize Customer Retention",
    desc: "Engage your audience at every stage of their journey with precise, data-driven strategies. Increase sales, customer lifetime value, and ROAS with hyper-targeted programmatic ads.",
    image: banner,
    cta: "Our Technology"
  };

  return (
    <>
      <Helmet>
        <title>ResurgeX: Retarget to Retain Your Ideal Customers</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/syin0m2gb/Favicon_ResurgeX_A_5Sj27yZ.svg?updatedAt=1720426288679"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Power your retargeting efforts to drive conversions, retention, and monetization with a transparent and high-performance retargeting platform."
        />
        <meta name="author" content="Resurgex.com" />
        <link rel="canonical" href={location} />
      </Helmet>
      <main>
        <Hero {...homeTitle} />
        <section>
          <div className="bulleye circlebg text-center pb-110">
            <Container>
              <Row>
                <Col>
                  <h2 className="mb-3">
                    Retargeting that Hits the{" "}
                    <span className="text-blue coloranimate">Bull’s-eye</span>
                  </h2>
                  <p className="mb-5 pb-md-5">
                    Deliver the right ad to the right user at the right time to
                    turn unengaged visitors into loyal
                    <span className="d-md-block">
                      customers. Seamlessly activate, retarget, and re-engage
                      users at every touchpoint.
                    </span>
                  </p>
                </Col>
              </Row>
              <div className="bulleye-wrap">
                <Row>
                  <Col md={4} className="mb-4">
                    <Card>
                      <Card.Body className="pb-0 pt-4">
                        <h4 className="text-blue font-700">Activate</h4>
                        <p className="font-500 mb-0">
                          Prompt new users to take initial action after
                          installation.
                        </p>
                        <div className="bulleye-wrap-bg position-relative">
                          <img
                            src={activate}
                            alt="activate"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={circle_bg}
                            alt="circle background"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4 mt-n55">
                    <Card>
                      <Card.Body className="pt-0">
                        <div className="bulleye-wrap-bg bulleye-wrap-bg-bottom position-relative mb-4">
                          <img
                            src={retarget}
                            alt="retarget"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={circle_bg}
                            alt="circle background"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                        <h4 className="text-blue font-700">Retarget</h4>
                        <p className="font-500 mb-0">
                          Retarget loyal and active users to unlock incremental
                          revenue.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4">
                    <Card>
                      <Card.Body className="pb-0 pt-4">
                        <h4 className="text-blue font-700">Re-engage</h4>
                        <p className="font-500 mb-0">
                          Re-engage inactive app users and win back customers.
                        </p>
                        <div className="bulleye-wrap-bg position-relative">
                          <img
                            src={re_engage}
                            alt="re engage"
                            className="img-fluid"
                            loading="lazy"
                          />
                          <img
                            src={circle_bg}
                            alt="circle background"
                            className="img-fluid"
                            loading="lazy"
                          />
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <div className="buzzwords circlebg">
            <div className="container">
              <h2 className="text-center mb-3">
                No Buzzwords;{" "}
                <span className="text-blue coloranimate">
                  Retargeting Delivers
                </span>
              </h2>
              <p className="text-center mb-5">
                Achieve tangible results for your business with personalized ad
                campaigns in real-time.
              </p>
              <div className="buzzwords-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="buzzwords-wrap-left lineanimate">
                      <ul className="p-0">
                        <li className="d-flex align-items-center mb-5">
                          <img
                            src={conversion}
                            alt="conversion"
                            className="img-fluid pe-3"
                            loading="lazy"
                          />
                          <p className="mb-0">
                            Increase conversions, order frequency, and customer
                            lifetime value.
                          </p>
                        </li>
                        <li className="d-flex align-items-center mb-5">
                          <img
                            src={metrices}
                            alt="metrics"
                            className="img-fluid pe-3"
                            loading="lazy"
                          />
                          <p className="mb-0">
                            Track and analyze metrics in real-time with complete
                            transparency.
                          </p>
                        </li>
                        <li className="d-flex align-items-center mb-5">
                          <img
                            src={creatives}
                            alt="creatives"
                            className="img-fluid pe-3"
                            loading="lazy"
                          />
                          <p className="mb-0">
                            Drive better performance and enhance user experience
                            using Dynamic Creatives.
                          </p>
                        </li>
                        <li className="d-flex align-items-center mb-5">
                          <img
                            src={in_app_engagement}
                            alt="in app engagement"
                            className="img-fluid pe-3"
                            loading="lazy"
                          />
                          <p className="mb-0">
                            Maximize in-app engagement and grow your active
                            customer base.
                          </p>
                        </li>
                        <li className="d-flex align-items-center mb-5">
                          <img
                            src={ad_budget}
                            alt="ad budget"
                            className="img-fluid pe-3"
                            loading="lazy"
                          />
                          <p className="mb-0">
                            Make the most of your ad budget to engage and retain
                            existing users
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img
                      src={retargeting_delivers}
                      alt="retargeting delivers"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="goals line-bg pb-110">
            <Container>
              <Row>
                <Col>
                  <h2 className="text-center mb-3">
                    We’re Tailored to{" "}
                    <span className="text-blue coloranimate">Your Goals</span>
                  </h2>
                  <p className="text-center mb-4 mb-md-5">
                    Leverage our extensive expertise powered by innovative
                    technology to achieve your desired results efficiently.
                  </p>
                </Col>
              </Row>
              <div className="goals-wrap">
                <Row>
                  <Col md={4} className="mb-4">
                    <Card className="h-100">
                      <div className="bg-primary goals-wrap-bg py-5">
                        <img
                          src={creative_studio}
                          alt="creative studio icon"
                          className="img-fluid mx-auto d-block w-25"
                          loading="lazy"
                        />
                      </div>
                      <Card.Body>
                        <h3 className="font-500 mb-3">Creative Studio</h3>
                        <p>
                          Captivate your audience and create highly engaging
                          creatives for truly personalized experiences.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4} className="mb-4">
                    <Card className="h-100">
                      <div className="bg-primary goals-wrap-bg py-5">
                        <img
                          src={algorithm}
                          alt="algorithm icon"
                          className="img-fluid mx-auto d-block w-25"
                          loading="lazy"
                        />
                      </div>
                      <Card.Body>
                        <h3 className="font-500 mb-3">Advanced Algorithm</h3>
                        <p>
                          Optimize your campaigns to reach your CPI, CPA, and
                          ROAS goals effectively.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4} className="mb-4">
                    <Card className="h-100">
                      <div className="bg-primary goals-wrap-bg py-5">
                        <img
                          src={granular_reporting}
                          alt="granular reporting icon"
                          className="img-fluid mx-auto d-block w-25"
                          loading="lazy"
                        />
                      </div>
                      <Card.Body>
                        <h3 className="font-500 mb-3">Granular Reporting</h3>
                        <p>
                          Make data-driven decisions and monitor campaign
                          performance with advanced reporting in real-time.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <div className="clients pb-110">
            <Container>
              <Row>
                <Col>
                  <h2 className="text-center mb-3">
                    ResurgeX Benefitted them;{" "}
                    <span className="text-blue coloranimate">
                      It’ll for You
                    </span>
                  </h2>
                </Col>
              </Row>
              <p className="text-center mb-5">
                We deliver impactful results driven by purpose. Our retargeting
                strategies and campaigns have helped businesses across
                industries,{" "}
                <span className="d-block">
                  countries, and regions achieve their goals.
                </span>
              </p>
            </Container>
            <div className="clients-slider">
              <div className="slide-track">
                <Slider />
              </div>
            </div>
          </div>
        </section>
        {/* <FooterCard title='We Make You <span className="text-blue coloranimate">ROAS</span>'/> */}
        <FooterCard title={<>Maximize Your ROAS with <span className="text-blue coloranimate">ResurgeX</span></>} cta={ <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-gradient">Contact Us</a>}/>
      </main>
    </>
  );
}

export default Homepage;
