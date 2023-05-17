import { FormEvent, useState } from "react";
import Button from "../button/Button";
import DropDown from "../dropDown/DropDown";
import InputField from "../input/Input";
import "./form.css";

const FormOrgano = () => {
  const equipe = ["ECI", "Gestão de Numerário", "Fiscalização"];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const onClickSubmit = (eventoClique: FormEvent<HTMLFormElement>) => {
    eventoClique.preventDefault();
    // Salvar os dados em um estado ou enviar para algum serviço
    alert("Seus dados foram enviados!");
  };

  try{
    const response = await axios
  }

  return (
    <section className="my-20 relative min-h-screen">
      <div className="form-container absolute inset-x-1/4">
        <form
          onSubmit={onClickSubmit}
          className="form bg-gray-200 rounded-2xl py-9 px-16 font-sans"
        >
          <h2 className="font-bold text-2xl">
            Preencha os dados para criar o card do colaborador
          </h2>
          <InputField
            required={true}
            label="Nome"
            placeholder="Digite Seu Nome"
            value={nome}
            onChange={(dataReceiptEvent) => setNome(dataReceiptEvent.target.value)}
          />
          <InputField
            required={true}
            label="Cargo"
            placeholder="Informe Seu Cargo"
            value={cargo}
            onChange={(dataReceiptEvent) => setCargo(dataReceiptEvent.target.value)}

          />
          <InputField
            required={true}
            label="Imagem"
            placeholder="Informe o Endereço da Imagem"
            value={imagem}
            onChange={(dataReceiptEvent) => setImagem(dataReceiptEvent.target.value)}
          />
          <DropDown item={equipe} label="Equipe" />
          <Button>Criar Card</Button>
        </form>
      </div>
    </section>
  );
};

export default FormOrgano;
