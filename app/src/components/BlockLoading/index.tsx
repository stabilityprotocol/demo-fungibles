import { BlockLoadingWrapper } from "./Styles";

export const BlockLoading: React.FC<{ height?: string; width?: string }> = ({
  height,
  width,
}) => {
  return <BlockLoadingWrapper {...{ height, width }} />;
};
