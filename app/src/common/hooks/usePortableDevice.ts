import { useMediaQuery } from "usehooks-ts";
import { mediaSizes } from "../Theme";

export const usePortableDevice = () => {
  const matches = useMediaQuery(mediaSizes.portableQuery);
  return { isPortable: matches };
};
