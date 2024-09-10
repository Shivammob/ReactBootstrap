import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import banner from "@/assets/images/contact/contact_banner.png";
import Hero from "./Hero";
import { Card, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";

function Contact() {
  const homeTitle = {
    small: "Contact Us",
    title: "Drive Action, Amplify Results",
    desc: "Get started today and connect with our team to kick-start your retargeting campaign.",
    image: banner,
  };


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (formData) => {
    // // const form = event.currentTarget;
    // // if (form.checkValidity() === false) {
    // //   event.preventDefault();
    // //   event.stopPropagation();
    // // }




    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('message', formData.message);

     // setValidated(true);
    // axios.post('https://cors-anywhere.herokuapp.com/https://kreditbuddy.com/api/v100/resurgex', formData)
    //   .then((response) => response.json())
    //   // console.log(response, "ss")
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    // axios("https://cors-anywhere.herokuapp.com/https://kreditbuddy.com/api/v100/resurgex", {
    //   body: formData,
    // })


    fetch('https://cors-anywhere.herokuapp.com/https://kreditbuddy.com/api/v100/resurgex', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    // axios.post('https://cors-anywhere.herokuapp.com/https://kreditbuddy.com/api/v100/resurgex', formData)
    //   .then((response) => {
    //     console.log('Success:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

      console.log(data, "formData")
    // console.log(response, "dssata");
  };

  return (
    <>
      <Helmet>
        <title>Reach Us Out | ResurgeX</title>
        <link
          rel="shortcut icon"
          href="https://ik.imagekit.io/syin0m2gb/Favicon_ResurgeX_A_5Sj27yZ.svg?updatedAt=1720426288679"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Contact us to connect with our team. Let us be your partner in growth to supercharge your retargeting campaigns and achieve remarkable results."
        />
        <meta name="author" content="Resurgex.com" />
        <link rel="canonical" href={location} />
      </Helmet>
      <main>
        <Hero {...homeTitle} />
        <section>
          <div className="getintouch line-bg pb-110">
            <Container>
              <Row className="text-center mb-4">
                <Col>
                  <h2 className="mb-3">
                    <span className="text-blue coloranimate">Get in Touch</span>{" "}
                    with Us Today!
                  </h2>
                  <p>
                    If you're interested in our products or services or simply
                    want to learn more{" "}
                    <span className="d-md-block">
                      about how we can help your business thrive, we're here to
                      help.
                    </span>
                  </p>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col md={8}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Control
                          // required
                          id="firstName"
                          type="text"
                          placeholder="First name"
                          {...register("firstName", {
                            required: "First name is required",
                          })}
                        />
                        {errors.firstName && <p className="mb-0 text-danger font-12 mt-1">{errors.firstName.message}</p>}
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Control
                          // required
                          id="lastName"
                          type="text"
                          placeholder="Last Name"
                          {...register("lastName", {
                            required: "Last Name is required",
                          })}
                        />
                        {errors.lastName && <p className="mb-0 text-danger font-12">{errors.lastName.message}</p>}
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Control
                          // required
                          id="email"
                          type="email"
                          placeholder="Email"
                          {...register("email", {
                            required: "true",
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          })}
                        />
                        {errors.email && errors.email.type === "required" && (
                          <p className="mb-0 text-danger font-12 mt-1">Email is required.</p>
                        )}
                        {errors.email && errors.email.type === "pattern" && (
                          <p className="mb-0 text-danger font-12 mt-1">Email is not valid.</p>
                        )}
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Control
                          // required
                          id="phone"
                          type="text"
                          placeholder="Mobile Number"
                          maxLength={10}
                          {...register("phone", {
                            required: "true",
                            pattern: /^[0-9]{10}$/,
                          })}
                        />
                        {errors.phone && errors.phone.type === "required" && (
                          <p className="mb-0 text-danger font-12 mt-1">Mobile no is required.</p>
                        )}
                        {errors.phone && errors.phone.type === "pattern" &&(
                          <p className="mb-0 text-danger font-12 mt-1">Mobile no is not valid.</p>
                        )}
                      </Col>
                      <Col xs={12} className="mb-3">
                        <Form.Control
                          id="message"
                          as="textarea"
                          placeholder="Message"
                          style={{ height: "160px" }}
                          {...register("message", {
                          })}
                        />
                      </Col>
                      <Col xs={12} className="mb-3 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-gradient rounded-3"
                        >
                          Submit
                        </button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
          <div className="headquaters pb-110">
            <Container>
              <Row className="text-center">
                <Col>
                  <h2 className="mb-4 mb-md-5">
                    More Ways to{" "}
                    <span className="text-blue coloranimate">Reach</span> Out
                  </h2>
                </Col>
              </Row>
              <Row className="align-items-center justify-content-center">
                {/* <div className="col-md-6 mb-4">
                        <h2 className="gradientheading1 ps-3 ps-lg-5 mb-4">Giving wings from the <span className="d-lg-block">city of dreams across</span> the globe.</h2>
                    </div> */}
                <Col md={11} lg={10} className="mb-4">
                  <Card className="card">
                    {/* <img src="https://www.resurgex.ai/assets/images/contact/mumbai.png" alt="mumbai" className="img-fluid"> */}
                    <Card.Body className="card-body p-4">
                      <Row className="row">
                        <Col md={5} className="mb-3">
                          <h5 className="font-600">Mumbai(HQ)</h5>
                          <p className="mb-0">
                            B-111, Western Edge 2, Western Express Highway,
                            Magathane, Food Corporation of India Warehouse,
                            Borivali East, Mumbai - 400066
                          </p>
                        </Col>
                        <Col md={4} className="mb-3">
                          <h5 className="font-600">Sales</h5>
                          <a
                            href="mailto:sales@mobavenue.com"
                            className="text-resets"
                          >
                            sales@mobavenue.com
                          </a>
                        </Col>
                        <Col md={3} className="mb-3">
                          <h5 className="font-600">Media</h5>
                          <a
                            href="mailto:pr@mobavenue.com"
                            className="text-resets"
                          >
                            pr@mobavenue.com
                          </a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
