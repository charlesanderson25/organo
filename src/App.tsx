import { useState } from "react";
import "./App.css";
import Banner from "./components/banner/Banner";
import FormOrgano from "./components/form/Form";

function App() {

  // const [colaboradores, setColaboradores] = useState([]);

  // const incluirColaborador = (colaborador) => {
  //   console.log(colaborador)
  // }

  return (
    <>
      <div className="App">
        <Banner />
        <FormOrgano />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
