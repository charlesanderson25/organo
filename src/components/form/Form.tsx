import Button from "../button/Button";
import DropDown from "../dropDown/DropDown";
import InputField from "../input/Input";
import "./form.css";

const FormOrgano = () => {
  
  const equipe = ['ECI', 'Gestão de Numerário', 'Fiscalização'];

  return (
    <section className="my-20 relative min-h-screen">
      <div className="form-container absolute inset-x-1/4">
        <form className="form bg-gray-200 rounded-2xl py-9 px-16 font-sans">
          <h2 className="font-bold text-2xl">
            Preencha os dados para criar o card do colaborador
          </h2>
          <InputField label="Nome" placeholder="Digite Seu Nome" />
          <InputField label="Cargo" placeholder="Informe Seu Cargo" />
          <InputField
            label="Imagem"
            placeholder="Informe o Endereço da Imagem"
          />
          <DropDown item={equipe} label="Equipe"/>
          <Button>
            Criar Card
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormOrgano;
