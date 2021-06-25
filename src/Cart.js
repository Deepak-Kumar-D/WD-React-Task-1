import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

export function Cart({ title, price, perksAvailable, perksUnavailable }) {
  return (
    <div className="cardBox">
      <Card
        className="card"
        style={{ width: "fit-content", borderRadius: "1rem", margin: "0" }}
      >
        <div style={{ padding: "0 1.25rem" }}>
          <Container>
            <Row className="text-center">
              <Col>
                <p className="title">{title}</p>
              </Col>
            </Row>

            <Row className="text-center">
              <Col>
                <h2 className="card-price">{price}</h2>
                <span className="period">/month</span>
              </Col>
            </Row>

            <hr style={{ marginTop: "0", marginBottom: "20px" }} />

            <div className="perks">
              <ul style={{ marginBottom: "0" }}>
                {perksAvailable.map((ele, index) => {
                  return (
                    <li style={{ fontWeight: ele === "5 Users" ? "bold" : "" }}>
                      <FaCheck className="fontAwesome" /> {ele}
                    </li>
                  );
                })}
              </ul>

              <ul className="uncheck">
                {perksUnavailable.map((ele) => {
                  return (
                    <li>
                      <FaTimes className="fontAwesome" /> {ele}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-center btnBox">
              <Button
                style={{
                  borderRadius: "5rem",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1rem",
                  padding: "1rem",
                }}
                className="btn"
                variant="primary"
                block
              >
                BUTTON
              </Button>
            </div>
          </Container>
        </div>
      </Card>
    </div>
  );
}
