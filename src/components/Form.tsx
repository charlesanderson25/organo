import InputField from "./Input";

const FormOrgano = () => {
    return (
        <div>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <InputField label="Nome" placeholder="Digite Seu Nome" />
            <InputField label="Cargo" placeholder="Informe Seu Cargo"/>
            <InputField label="Imagem" placeholder="Informe o Endereço da Imagem" />
        </div>
    )
}

export default FormOrgano;