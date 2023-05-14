
interface PropsTeam{
    nome: string;
    primaryColor: string;
    secondaryColor: string;
}

const Team = ({ nome, primaryColor, secondaryColor }: PropsTeam) =>{

    return (
        <section style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderColor: primaryColor }}>{nome}</h3>
        </section>
    )
}

export default Team;