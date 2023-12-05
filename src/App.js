import "./App.css";

import etsylogo from "./etsylogo.png";
import iglogo from "./iglogo.png";
import tinkercelcollage from "./tinkercelcollage.png";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${tinkercelcollage})`,
        height: 700,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#EDB2B0",
            height: 300,
            width: 800,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Tinker Cel</h1>
            <p>Website coming soon!</p>
            <p>
              In the meantime, to view and purchase beautiful handcrafted
              jewelry and accessories checkout
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            TinkerCel on:
            <a
              href="https://www.etsy.com/shop/TinkerCelbyCELINA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={etsylogo}
                alt="logo"
                style={{
                  height: 35,
                  default: false,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/tinker_cel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iglogo}
                alt="logo"
                style={{ height: 35, default: false }}
              />
            </a>
          </div>
          <div>
            or email{" "}
            <a href="mailto:tinker.cely@gmail.com">tinker.cely@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
