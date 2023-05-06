import "./App.css";
import Banner from "./components/banner/Banner";
import FormOrgano from "./components/form/Form";

function App() {
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
