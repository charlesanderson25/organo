import "./input.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  required: true;
}

const InputField = ({ label, placeholder, required }: InputFieldProps) => {
  return (
    <div className="input-div">
      <label className="block my-4 text-2xl ">{label}</label>
      <input
        required
        className="bg-white shadow-md w-full py-3 px-1"
        id="input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
