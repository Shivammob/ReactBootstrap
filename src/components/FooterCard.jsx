import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function FooterCard({title, cta}) {
  return (
    <section>
      <Container className="mb-1">
        <Row>
          <Col>
            <div className="roas text-center">
              <h2 className="font-600 mb-4 text-white">
                {title}
              </h2>
              {cta}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterCard;
