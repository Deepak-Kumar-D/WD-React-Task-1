import "./App.css";
import { Title } from "./Title";
import { RealCard } from "./RealCard";

function App() {
  return (
    // Main layout of the page for the purpose of 100% height of the inner components
    <div className="main">
      {/* Title bar and the title of the page component with the price tag icon */}
      <Title />

      {/* Container and holders for the decks inside it */}
      <div className="cont">
        <div className="container">
          {/* Reflection container for the reflection under the decks */}
          <div className="reflection">
            {/* Decks Component */}
            <RealCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
