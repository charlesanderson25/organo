interface PropsEmployee{
  src: string;
  alt: string;
  nomeColaborador: string;
  cargoColaborador: string;
}

const Employee = ({ src, alt, nomeColaborador, cargoColaborador }: PropsEmployee) => {
  return (
    <div>
      <div>
        <img
          src={src}
          alt={alt}
        />
      </div>
      <div>
        <h4>{nomeColaborador}</h4>
        <h5>{cargoColaborador}</h5>
      </div>
    </div>
  );
};

export default Employee;
