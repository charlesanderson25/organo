import "./input.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps) => {
  return (
    <div className="input-div">
      <label className="block my-4 text-2xl ">{label}</label>
      <input
        className="bg-white shadow-md w-full py-3 px-1"
        id="input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
