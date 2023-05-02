import "./App.css";
import Banner from "./components/Banner";
import InputField from "./components/Input";

function App() {
  return (
    <>
      <div className="App">
        <Banner />
        <InputField label="Nome" placeholder="Digite Seu Nome" />
        <InputField label="Cargo" placeholder="Informe Seu Cargo"/>
        <InputField label="Imagem" placeholder="Informe o Endereço da Imagem" />
      </div>
    </>
  );
}

export default App;
