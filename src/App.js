import "./App.css";
import { Title } from "./Title";
import { Cart } from "./Cart";
import CardDeck from "react-bootstrap/CardDeck";
import { cartData } from "./cartData";

function RealCard() {
  return (
    <CardDeck className="cardDeck">
      {cartData.map((ele) => {
        const { title, price, perksAvailable, perksUnavailable } = ele;
        return (
          <Cart
            title={title}
            price={price}
            perksAvailable={perksAvailable}
            perksUnavailable={perksUnavailable}
          />
        );
      })}
    </CardDeck>
  );
}

function App() {
  return (
    <div className="main">
      <Title />
      <div className="cont">
        <div className="container" style={{ padding: "20px 0" }}>
          {/* <RealCard /> */}
          <div className="reflection">
            <RealCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
