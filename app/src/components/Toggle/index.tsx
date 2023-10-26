import { useCallback, useState } from "react";
import { ToggleOption, ToggleWrapper } from "./Styles";

export const Toggle: React.FC<{ options: React.ReactNode[] }> = ({
  options,
}) => {
  const [selected, setSelected] = useState(0);

  const onClick = useCallback((index: number) => {
    setSelected(index);
  }, []);

  return (
    <ToggleWrapper>
      {options.map((option, index) => (
        <ToggleOption
          key={index}
          active={index === selected}
          onClick={() => onClick(index)}
        >
          {option}
        </ToggleOption>
      ))}
    </ToggleWrapper>
  );
};
