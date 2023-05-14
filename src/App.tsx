import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import FormOrgano from "./components/form/Form";
import Team from "./components/team/team";

function App() {
  const times = [
    {
      nome: "ECI",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },

    {
      nome: "Fiscalização",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },

    {
      nome: "Gestão de Numerário",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  return (
    <>
      <div className="App">
        <Banner />
        <FormOrgano />

        {times.map((time) => (
          <Team
            key={time.nome}
            nome={time.nome}
            primaryColor={time.corPrimaria}
            secondaryColor={time.corSecundaria}
          />
        ))}
      </div>
    </>
  );
}

export default App;
