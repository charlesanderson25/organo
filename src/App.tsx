import "./App.css";
import Banner from "./components/Banner";
import InputField from "./components/Input";

function App() {
  return (
    <>
      <div className="App">
        <Banner />
        <InputField label="Nome" />
        <InputField label="Cargo" />
        <InputField label="Imagem" />
      </div>
    </>
  );
}

export default App;
