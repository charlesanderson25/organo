import "./input.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className="input-div">
      <label>{label}</label>
      <input id="input" type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;


