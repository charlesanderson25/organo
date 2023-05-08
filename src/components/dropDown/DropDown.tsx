import React, {ChangeEvent, useState} from "react";

const equipe = ["ECI", "Gestão de Numerário", "Fiscalização"];

interface DropDownProps {
  item: string[];
  label: string;
}

const DropDown = ({ item, label }: DropDownProps) => {
  const [selectValue, setSelectValue] = useState('');

  const handleSelect = (eventSelect: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(eventSelect.target.value);
  }

  return (
    <div className="py-10">
      <label className="text-2xl">
        {label}
        <select value={selectValue} onChange={handleSelect} className="block mt-2 text-xl p-1 py-2 shadow-md w-full">
          {equipe.map((equipeItem) => {
            return <option key={equipeItem}>{equipeItem}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default DropDown;
