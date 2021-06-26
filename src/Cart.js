import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { CheckUncheck } from "./CheckUncheck";

export function Cart({ title, price, perksAvailable, perksUnavailable }) {
  return (
    <div className="cardBox">
      <Card className="card" style={{ borderRadius: "1rem", margin: "0" }}>
        <div style={{ padding: "0 1.25rem" }}>
          {/* Title of the decks */}
          <Container>
            <Row className="text-center">
              <Col>
                <p className="title">{title}</p>
              </Col>
            </Row>

            {/* price and month for the decks */}
            <Row className="text-center">
              <Col>
                <h2 className="card-price">{price}</h2>
                <span className="period">/month</span>
              </Col>
            </Row>

            <hr style={{ marginTop: "0", marginBottom: "20px" }} />

            {/* Checked and Crossed lists in each deck */}
            <CheckUncheck
              perksAvailable={perksAvailable}
              perksUnavailable={perksUnavailable}
            ></CheckUncheck>

            {/* Button in each deck */}
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
