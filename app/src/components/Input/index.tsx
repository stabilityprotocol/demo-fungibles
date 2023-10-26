import { useCallback } from "react";
import { Input as InputComponent, InputWrapper } from "./Styles";

export const Input: React.FC<{
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}> = ({ placeholder, onChange, icon, value, disabled }) => {
  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <InputWrapper icon={!!icon}>
      {icon && icon}
      <InputComponent
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
        disabled={disabled}
      />
    </InputWrapper>
  );
};
