import "./input.css";

interface InputFieldProps {
  label: string;
}

const InputField = ({ label }: InputFieldProps) => {
  return (
    <section className="input">
      <label>{label}</label>
      <input type="text" placeholder="Digite Seu Nome" />
    </section>
  );
};

export default InputField;
