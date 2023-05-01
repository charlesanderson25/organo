import "./input.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <section className="input">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </section>
  );
};

export default InputField;
