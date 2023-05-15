import Employee from "../employee/Employee";

const colaboradorEstatico = {

  src: 'https://github.com/charlesanderson25.png',
  alt: 'Charles Anderson Profile',
  nomeColaborador: 'Charles Anderson',
  cargoColaborador: 'Assessor I UT',
};

interface PropsTeam {
  nome: string;
  primaryColor: string;
  secondaryColor: string;
}

const Team = ({ nome, primaryColor, secondaryColor }: PropsTeam) => {
  return (
    <section style={{ backgroundColor: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{nome}</h3>
      <Employee src={colaboradorEstatico.src} alt={colaboradorEstatico.alt} nomeColaborador={colaboradorEstatico.nomeColaborador} cargoColaborador={colaboradorEstatico.cargoColaborador}/>
    </section>
  );
};

export default Team;
