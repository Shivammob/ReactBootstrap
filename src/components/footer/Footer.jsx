import React, { useEffect, useState } from "react";
import logo from "@/assets/images/resurgex_logo.svg";
import facebook from "@/assets/images/facebook.svg";
import linkedin from "@/assets/images/linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import youtube from "@/assets/images/youtube.svg";
import members from "@/assets/images/member.png";
import back_to_top from "@/assets/images/back_to_top.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const [top, setTop] = useState(0);
  const date = new Date().getFullYear();
  const backtoTop = () => {
    setTop(window.scrollY);
  };
  window.addEventListener("scroll", backtoTop);

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-5 col-lg-5">
                <div className="footer-top-logo">
                  <img
                    src={logo}
                    alt="resurgex"
                    className="img-fluid w190 mb-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-lg-5">
                <p className="font-14 mb-4">
                  ResurgeX by Mobavenue has been enabling app marketers to
                  leverage programmatic advertising solutions for retargeting,
                  engagement, and conversion to drive sustainable app growth
                  throughout the user app journey.
                </p>
                <div className="footer-top-icons d-flex align-items-end flex-wrap mb-4">
                  <h6 className="text-blue font-14 font-600 mb-0 pe-4">
                    Follow Us
                  </h6>
                  <ul className="mb-0 d-flex align-items-center p-0">
                    <li className="pe-3">
                      <a
                        href="https://www.facebook.com/profile.php?id=100078135000395"
                        target="_blank"
                      >
                        <img
                          src={facebook}
                          alt="facebook"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        href="https://www.linkedin.com/company/mob-avenue/?viewAsMember=true"
                        target="_blank"
                      >
                        <img
                          src={linkedin}
                          alt="linkedin"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        href="https://www.instagram.com/mobavenue_advertising/"
                        target="_blank"
                      >
                        <img
                          src={instagram}
                          alt="instagram"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li className="pe-3">
                      <a
                        href="https://www.youtube.com/channel/UC-cmMH_JTS8pD-UXQrWSXFQ"
                        target="_blank"
                      >
                        <img
                          src={youtube}
                          alt="youtube"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-lg-5">
                <div className="row justify-content-between">
                  <div className="col-4 col-md-4">
                    <div className="footer-top-menu">
                      <h6 className="">Quick Links</h6>
                      <ul className="p-0">
                        <li>
                          <NavLink to="/technology">Technology</NavLink>
                        </li>
                        <li>
                          <NavLink to="/solutions">Solutions</NavLink>
                        </li>
                        <li>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            Resources
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-4 col-md-4">
                    <div className="footer-top-menu">
                      <h6 className="">Company</h6>
                      <ul className="p-0">
                        <li>
                          <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                          <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-4 col-md-4">
                    <div className="footer-top-menu">
                      <h6 className="">Legal</h6>
                      <ul className="p-0">
                        <li>
                          <NavLink to="/terms-of-use">
                            Terms of Use
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/privacy-policy">
                            Privacy Policy
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/cookie-policy">
                            Cookie Policy
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="footer-top-member">
                  <h6 className="text-blue font-14 font-600 mb-3">Member at</h6>
                  <img src={members} alt="members at" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row justify-content-end g-0">
              <div className="col-md-8 col-lg-7">
                <div className="d-flex justify-content-center justify-content-md-between align-items-center flex-wrap mb-1">
                  <p className="mb-0 font-14 mb-2 pe-3">
                    © Copyright <span>{date}</span>, All Rights Reserved
                  </p>
                  <span className="d-block font-10 mb-2">
                    Made in India for the World
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        className={top > 100 ? "back-to-top d-block" : "back-to-top d-none"}
        id="backtoTop"
        onClick={backtoTop}
      >
        <img
          src={back_to_top}
          alt="back to top"
          className="img-fluid rounded-circle"
        />
      </a>
    </footer>
  );
}

export default Footer;
