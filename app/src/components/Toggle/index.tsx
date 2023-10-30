import { useCallback, useState } from "react";
import { ToggleOption, ToggleWrapper } from "./Styles";

export const Toggle: React.FC<{
  options: readonly React.ReactNode[];
  onSelection: (option: React.ReactNode) => void;
}> = ({ options, onSelection }) => {
  const [selected, setSelected] = useState(0);

  const onClick = useCallback(
    (index: number) => {
      setSelected(index);
      const option = options[index];
      onSelection(option);
    },
    [onSelection, options]
  );

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
