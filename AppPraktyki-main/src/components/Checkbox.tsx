import React from "react";

interface CheckboxProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ value, checked, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(value);
  };

  return (
    <div className="answer-search-checkbox">
      <input
        type="checkbox"
        name="search-type"
        value={value}
        onChange={handleCheckboxChange}
        checked={checked}
      />
      {value}
    </div>
  );
};

export default Checkbox;
