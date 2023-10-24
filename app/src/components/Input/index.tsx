import { useCallback } from "react";

export const Input: React.FC<{
  placeholder?: string;
  onChange: (value: string) => void;
}> = ({ placeholder, onChange }) => {
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return <input placeholder={placeholder} onChange={onInputChange} />;
};
