import { Cart } from "./Cart";
import CardDeck from "react-bootstrap/CardDeck";
import { cartData } from "./cartData";

export function RealCard() {
  return (
    // React Bootstrap card
    <CardDeck className="cardDeck">
      {cartData.map((ele, index) => {
        const { title, price, perksAvailable, perksUnavailable } = ele;
        return (
          // Each Card individually mapped using the data from the cartData.js
          <Cart
            key={index}
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
