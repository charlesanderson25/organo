import "./input.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;


