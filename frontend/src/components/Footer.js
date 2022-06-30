import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="bg-dark text-white">
      <Container bg="dark" variant="dark">
        <Row>
          <Col className=" footer text-center py-2">
            copyright &copy;ShopNFun
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Footer;
