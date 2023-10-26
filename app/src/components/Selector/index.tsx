import React, { useCallback, useRef, useState } from "react";
import {
  SelectorOption,
  SelectorOptions,
  SelectorSelected,
  SelectorWrapper,
} from "./Styles";
import { AiOutlineDown } from "react-icons/ai";
import { useOnClickOutside } from "usehooks-ts";

export type Option = {
  label: React.ReactNode;
  value: string;
};

export const Selector: React.FC<{
  options: Option[];
  selected?: Option;
  onSelected: (option: string) => void;
  customization?: {
    hideCaret?: boolean;
  };
}> = ({ options, selected: sel, onSelected, customization }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<Option>(sel || options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  const onSelectedClick = useCallback(() => {
    setIsOpen((st) => !st);
  }, []);

  const onOptionClick = useCallback(
    (option: Option) => {
      setSelected(option);
      onSelected(option.value);
      setIsOpen(false);
    },
    [onSelected]
  );

  useOnClickOutside(ref, handleClickOutside);

  return (
    <SelectorWrapper ref={ref}>
      <SelectorSelected
        isOpen={isOpen}
        onClick={onSelectedClick}
        className="selector__selected"
      >
        <span>{sel?.label ?? selected.label}</span>
        {!customization?.hideCaret && <AiOutlineDown />}
      </SelectorSelected>
      {isOpen && (
        <SelectorOptions>
          {options.map((opt, idx) => (
            <SelectorOption key={idx} onClick={() => onOptionClick(opt)}>
              {opt.label}
            </SelectorOption>
          ))}
        </SelectorOptions>
      )}
    </SelectorWrapper>
  );
};
