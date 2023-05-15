import { ChangeEvent, useEffect, useState } from "react";
import "./input.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (value: string) => void;
}

const InputField = ({ label, placeholder, required, value, onChange }: InputFieldProps) => {
  const [valueCaptured, setValueCaptured] = useState(value);

  const catchValue = (eventoCaptura: ChangeEvent<HTMLInputElement>) => {
    const newValue = eventoCaptura.target.value;
    setValueCaptured(newValue);
    onChange(newValue);
  };

  // Atualizar a captura do catchValue, porque o 'set' do hook useState é uma função assíncrona 
  useEffect( () => {
    console.log(valueCaptured);
  }, [valueCaptured]);

  return (
    <div className="input-div">
      <label className="block my-4 text-2xl ">{label}</label>
      <input
        value={valueCaptured}
        onChange={catchValue}
        required={required}
        className="bg-white shadow-md w-full py-3 px-1"
        id="input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
