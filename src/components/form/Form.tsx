import { FormEvent, useState, ChangeEvent } from "react";
import Button from "../button/Button";
import DropDown from "../dropDown/DropDown";
import InputField from "../input/Input";
import "./form.css";
import axios from "axios";


const FormOrgano = () => {
  const equipes = ["ECI", "Gestão de Numerário", "Fiscalização"];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");

  const [equipe, setEquipe] = useState("");
  
  const handleSelect = (eventSelect: ChangeEvent<HTMLSelectElement>) => {
    setEquipe(eventSelect.target.value);
  }

  const onClickSubmit = async(eventoClique: FormEvent<HTMLFormElement>) => {
    eventoClique.preventDefault();
    alert("Seus dados foram enviados!");

    try{
      const novoColaborador = {
        id: 4,
        nome: nome,
        cargo: cargo,
        imagem: imagem,
        equipe: equipe,
      };

      // Salvar os dados em um estado ou enviar para algum serviço
    
      await axios.post('http://localhost:3000/colaborador', novoColaborador);

      alert("Novo colaborador cadastrado com sucesso!");

      // Limpar dados do formulário
      setNome("");
      setCargo("");
      setImagem("");

    }catch (error){
      console.error(error);
      alert("Erro ao cadastrar colaboradore, por favor, tente novamente!");
    };
    
   
  };

 

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
          <DropDown item={equipes} value={equipe} onChange={handleSelect} label="Equipe" />
          <Button>Criar Card</Button>
        </form>
      </div>
    </section>
  );
};

export default FormOrgano;
