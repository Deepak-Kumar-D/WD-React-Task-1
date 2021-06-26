import { FaCheck, FaTimes } from "react-icons/fa";

export function CheckUncheck(props) {
  return (
    <div className="perks">
      {/* Each checked lists are mapped in the li */}
      <ul
        style={{
          marginBottom: "0",
        }}
      >
        {props.perksAvailable.map((ele, index) => {
          return (
            <li
              key={index}
              style={{
                fontWeight:
                  ele === "5 Users" || ele === "Unlimited Users" ? "bold" : "",
              }}
            >
              <FaCheck className="fontAwesome" />{" "}
              {ele === "Unlimited Free Subdomains" ? (
                <span>
                  <b>Unlimited</b> Free Subdomains
                </span>
              ) : (
                ele
              )}
            </li>
          );
        })}
      </ul>

      {/* Each unchecked lists are mapped in the li */}
      <ul className="uncheck">
        {props.perksUnavailable.map((ele, index) => {
          return (
            <li key={index}>
              <FaTimes className="fontAwesome" /> {ele}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
