import React from "react";
import banner from "@/assets/images/solutions/solutions_banner.png";
import Hero from "./Hero";
import personalized_experience from "@/assets/images/solutions/personalized_experience.png";
import inapp_activity_ltv from "@/assets/images/solutions/inapp_activity_ltv.png";
import grow_active_user from "@/assets/images/solutions/grow_active_user.png";
import convert_retargeting from "@/assets/images/solutions/convert_retargeting.png";
import across_platform from "@/assets/images/solutions/across_platform.png";
import FooterCard from "./FooterCard";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';

function Solutions() {
  const homeTitle = {
    small: "App Retargeting",
    title: "When it Comes to Retargeting, You’re in Capable Hands",
    desc: "Retargeting elevates engagement by up to 400% and boosts the average conversion rate by up to 150%. Stay in front of opportunities and achieve app success with ResurgeX.",
    image: banner,
    cta: "Get a Demo",
  };
  return (
    <>
      <Helmet>
        <title>Transform Engagement with ResurgeX</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/syin0m2gb/Favicon_ResurgeX_A_5Sj27yZ.svg?updatedAt=1720426288679"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="We’re app marketers' most trusted programmatic retargeting companion. Unlock your app’s true potential with ResurgeX."
        />
        <meta name="author" content="Resurgex.com" />
        <link rel="canonical" href={location} />
      </Helmet>
      <main>
        <Hero {...homeTitle} />
        <section>
          <div className="solparallax linebgparallax">
            <Container>
              <Row className="align-items-center justify-content-between pb-40">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <h2 className="mb-3">
                      Create{" "}
                      <span className="text-blue coloranimate">
                        Personalized Experiences
                      </span>
                    </h2>
                    <p>
                      Capture user engagement through highly personalized ad
                      formats (display, native, video) optimized for
                      conversions, enabling repeat interactions and sustained
                      interest.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <img
                      src={personalized_experience}
                      alt="create personalized experiences"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between pb-40 flex-column-reverse flex-md-row">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <img
                      src={inapp_activity_ltv}
                      alt="in-app activity and ltv"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <h2 className="mb-3">
                      Increase{" "}
                      <span className="text-blue coloranimate">
                        In-app Activity
                      </span>{" "}
                      &<span className="text-blue coloranimate">LTV</span>
                    </h2>
                    <p>
                      Boost in-app engagement through personalized content and
                      crafting compelling user experiences at strategic
                      touchpoints. Seize every opportunity to engage with your
                      audience and enhance customer lifetime value.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between pb-40">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <h2 className="mb-3">
                      Grow{" "}
                      <span className="text-blue coloranimate">
                        Active Users
                      </span>
                    </h2>
                    <p>
                      Expand your pool of active users through efficient
                      retargeting strategies to prevent lapses and effectively
                      re-engage them with your app. Make every touchpoint count
                      that facilitates long-term engagement and loyalty.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <img
                      src={grow_active_user}
                      alt="grow active users"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between flex-column-reverse flex-md-row pb-40">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <img
                      src={convert_retargeting}
                      alt="convert by retargeting"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <h2 className="mb-3">
                      Convert More Via{" "}
                      <span className="text-blue coloranimate d-xl-block">
                        Dynamic Retargeting
                      </span>
                    </h2>
                    <p>
                      Re-engage with customers with dynamically personalized ads
                      tailored to their interests in real-time, reducing abandon
                      cart rates and increasing the chances of conversion for
                      sale. 
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-between pb-40">
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <h2 className="mb-3">
                      Reach Customers{" "}
                      <span className="text-blue coloranimate">
                        Across Devices & Platforms
                      </span>
                    </h2>
                    <p>
                      Reach your customers wherever they go. Run campaigns
                      across devices and ad exchanges with brand-safe ad
                      inventory. Target them precisely where they are most
                      likely to engage with your brand.
                    </p>
                  </div>
                </Col>
                <Col md={6} className="mb-4 mb-md-0">
                  <div className="solparallax-wrap">
                    <img
                      src={across_platform}
                      alt="across platform"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <FooterCard
          title={
            <>
              Boost Engagement and Retention with{" "}
              <span className="text-blue coloranimate d-md-block">
                Advanced Retargeting Solutions
              </span>
            </>
          }
          cta={
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="btn btn-gradient"
            >
              Let’s Get Started
            </a>
          }
        />
      </main>
    </>
  );
}

export default Solutions;
