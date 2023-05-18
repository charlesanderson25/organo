import React, {ChangeEvent, useState} from "react";

const equipe = ["ECI", "Gestão de Numerário", "Fiscalização"];

interface DropDownProps {
  item: string[];
  label: string;
  value: string;
  onChange: ( eventSelect: ChangeEvent<HTMLSelectElement> ) => void;
}

const DropDown = ({ item, label, value, onChange }: DropDownProps) => {
  

  return (
    <div className="py-10">
      <label className="text-2xl">
        {label}
        <select value={value} onChange={onChange} className="block mt-2 text-xl p-1 py-2 shadow-md w-full">
          {equipe.map((equipeItem) => {
            return <option key={equipeItem}>{equipeItem}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default DropDown;
