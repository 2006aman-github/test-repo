import React from "react";
import { Icon } from "@iconify/react";
import Input from "./Input.jsx";
import "../scss/app.scss";

function App() {
  return (
    <div className="App">
      {/* header  */}

      <div className="header">
        <span className="header-icon">
          <Icon icon="bx:arrow-back" />
        </span>
        <h1>User Settings</h1>
        <span className="header-btn">
          <button>Buy Coins</button>
        </span>
      </div>
      {/* {body } */}
      <section className="home-body">
        <form action="">
          <Input placeholder={"Date of Birth"} />
          <Input placeholder={"Nationality"} />
          <Input placeholder={"Gender"} />
          <button>Confirm</button>
        </form>
      </section>
      {/* gradient element  */}
      <div className="gradient-el"></div>
    </div>
  );
}

export default App;
