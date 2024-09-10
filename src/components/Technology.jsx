import React from "react";
import Hero from "./Hero";
import { Helmet } from 'react-helmet-async';
import { Col, Container, Row } from "react-bootstrap";
import banner from "@/assets/images/technology/technology_banner.png";
import powered_ai from "@/assets/images/technology/powered_ai.png";
import optimize from "@/assets/images/technology/optimize.png";
import precise_audience from "@/assets/images/technology/precise_audience.png";
import open_transparent from "@/assets/images/technology/open_transparent.png";
import top_app_inventory from "@/assets/images/technology/top_app_inventory.jpg";
import best_app_inventory from "@/assets/images/technology/best_ad_placement.jpg";
import app_exclusion_inclusion from "@/assets/images/technology/app_exclusion_inclusion.jpg";
import top_tier_traffic from "@/assets/images/technology/top_tier_traffic.jpg";
import FooterCard from "./FooterCard";

function Technology() {
  const homeTitle = {
    small: "Technology",
    title: "A DSP Engineered for Performance",
    desc: "Transform engagement, boost conversions, and maximize ROAS with a fully transparent programmatic demand-side platform.",
    image: banner,
    cta: "Contact Us",
  };

  return (
    <>
      <Helmet>
        <title>Technology Driving Growth & Performance | ResurgeX</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/syin0m2gb/Favicon_ResurgeX_A_5Sj27yZ.svg?updatedAt=1720426288679"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Explore ResurgeX's advanced retargeting technology. Stay two steps ahead with precision retargeting and unmatched engagement."
        />
        <meta name="author" content="Resurgex.com" />
        <link rel="canonical" href={location} />
      </Helmet>
      <main>
        <Hero {...homeTitle} />
        <section>
          <div className="interactions circlebg circlebg1 text-center">
            <Container>
              <Row>
                <Col>
                  <h2 className="mb-3">
                    Driving Interactions{" "}
                    <span className="text-blue coloranimate">Worldwide</span>
                  </h2>
                  <p className="pb-4 pb-md-5">
                    Our state-of-the-art platform connects with users on a
                    global scale, tailoring interactions to resonate on a
                    personal level.
                  </p>
                </Col>
              </Row>
              <div className="interactions-wrap">
                <Row>
                  <Col md={4} className="mb-4">
                    <div className="interactions-wrap-block">
                      <h2 className="gradientheading">1B+</h2>
                      <p className="font-14 mb-0">Devices reached monthly</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="interactions-wrap-block borderx">
                      <h2 className="gradientheading">35B+</h2>
                      <p className="font-14 mb-0">Impressions served monthly</p>
                    </div>
                  </Col>
                  <Col md={4} className="mb-4">
                    <div className="interactions-wrap-block">
                      <h2 className="gradientheading">1T+</h2>
                      <p className="font-14 mb-0">Ad request monthly</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </section>
        <section>
          <div className="powered linebgparallax">
            <Container>
              <Row className="align-items-center justify-content-between pb-40">
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <h2 className="mb-3">
                      Powered by Advanced{" "}
                      <span className="text-blue coloranimate">
                        AI <span className="d-md-block">& ML Intelligence</span>
                      </span>
                    </h2>
                    <p>
                      Our platform leverages advanced artificial intelligence
                      and machine learning algorithms to optimize and improve
                      campaign performance, creating highly personalized ad
                      experiences that increase engagement and conversions.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <img
                      src={powered_ai}
                      alt="powered by ai"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between pb-40 flex-column-reverse flex-md-row">
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <img
                      src={optimize}
                      alt="powered by ai"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <h2 className="mb-3">
                      Optimize and Deliver with{" "}
                      <span className="text-blue coloranimate">
                        Predictive Bidding
                      </span>
                    </h2>
                    <p>
                      Get the most out of your budget with accurate user-intent
                      forecasting. With flexible optimization, reach your goals
                      and deliver the right ad to the right audience at the
                      right time.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between pb-40">
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <h2 className="mb-3">
                      Precise{" "}
                      <span className="text-blue coloranimate">
                        Audience Segmentation
                      </span>
                    </h2>
                    <p>
                      Define and create cohorts of users into groups while
                      treating them individually.  Deliver highly personalized
                      ads with precise targeting for maximum engagement and
                      conversions.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <img
                      src={precise_audience}
                      alt="precise audience segmentation"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between flex-column-reverse flex-md-row pb-110">
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <img
                      src={open_transparent}
                      alt="open and transparent"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="powered-wrap">
                    <h2 className="mb-3">
                      We’re{" "}
                      <span className="text-blue coloranimate">
                        Open and Transparent
                      </span>
                    </h2>
                    <p>
                      Gain 24/7 access to the performance dashboard with
                      complete real-time transparency over your campaigns and
                      uncover detailed insights and analytics.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div className="brandsafe pb-110">
            <Container>
              <Row>
                <Col className="text-center">
                  <h2 className="mb-3 text-blue coloranimate">Brand Safety</h2>
                  <p className="mb-4 mb-md-5 pb-md-5">
                    Display ads only where your audience engages. Safeguard and
                    elevate your brand by filtering for top-tier{" "}
                    <span className="d-md-block">
                      traffic and upholding ad safety standards.
                    </span>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={3} className="mb-4">
                  <div className="brandsafe-wrap">
                    <img
                      src={top_app_inventory}
                      alt="top app inventory"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <h4>
                      Top App <span className="d-md-block">inventory</span>
                    </h4>
                  </div>
                </Col>
                <Col md={3} className="mb-4">
                  <div className="brandsafe-wrap mt-n55">
                    <img
                      src={best_app_inventory}
                      alt="best ad placement"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <h4>
                      Best ad <span className="d-md-block">placement</span>
                    </h4>
                  </div>
                </Col>
                <Col md={3} className="mb-4">
                  <div className="brandsafe-wrap">
                    <img
                      src={app_exclusion_inclusion}
                      alt="app exclusion and inclusion"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <h4>
                      App exclusion/
                      <span className="d-md-block">inclusion</span>
                    </h4>
                  </div>
                </Col>
                <Col md={3} className="mb-4 mt-n55">
                  <div className="brandsafe-wrap">
                    <img
                      src={top_tier_traffic}
                      alt="top tier traffic"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <h4>
                      Top-tier <span className="d-md-block">traffic</span>
                    </h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <FooterCard title={<>Stay Ahead <span className="d-md-block"> of the Competition with{" "} <span className="text-blue coloranimate">ResurgeX</span></span></>} cta={<a href="#" onClick={(e) => e.preventDefault()} className="btn btn-gradient">Reach Us Out</a>}/>
      </main>
    </>
  );
}

export default Technology;
