import InputField from "../input/Input";
import "./form.css";

const FormOrgano = () => {
  return (
    <div className="form-container flex-row my-20">
      <form id="form">
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputField label="Nome" placeholder="Digite Seu Nome" />
        <InputField label="Cargo" placeholder="Informe Seu Cargo" />
        <InputField label="Imagem" placeholder="Informe o Endereço da Imagem" />
      </form>
    </div>
  );
};

export default FormOrgano;
