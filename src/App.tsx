import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import FormOrgano from "./components/form/Form";
import Team from "./components/team/team";

function App() {

  return (
    <>
      <div className="App">
        <Banner />
        <FormOrgano />
        <Team />
      </div>
    </>
  );
}

export default App;
