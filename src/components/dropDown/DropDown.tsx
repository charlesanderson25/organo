const equipe = ["ECI", "Gestão de Numerário", "Fiscalização"];

interface DropDownProps {
  item: string[];
  label: string;
}

const DropDown = ({ item, label }: DropDownProps) => {
  return (
    <div className="py-10">
      <label className="text-2xl">
        {label}
        <select className="block mt-2 text-xl p-1 py-2 shadow-md w-full">
          {equipe.map((equipeItem) => {
            return <option key={equipeItem}>{equipeItem}</option>;
          })}
        </select>
      </label>
    </div>
  );
};

export default DropDown;
