import { NFTStorage } from "nft.storage";
import { useRecoilState } from "recoil";
import { NftState } from "../State/NFT";
import { useCallback } from "react";

const nftStorageApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY2OEU1QTBDYTZGOTNlNWY2MDIzRjI0NzM5MDhDODlEOTdGM2U2RkEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5ODc1Mzc3MzMzOSwibmFtZSI6ImRlbW8tZnVuZ2libGVzIn0.i3sGY0uAM3HnIY9Ca_c--d7xnSghKef5l5Td5_BJ-f4";

const client = new NFTStorage({ token: nftStorageApiKey });

export const useNftStorage = () => {
  const [nftData, setNftData] = useRecoilState(NftState);

  const uploadNftData = useCallback(
    async (collectionName: string, file: File) => {
      const normalizeName = file.name.replace(
        /(.+?)(\.[^.]*$|$)/,
        (_match, _fileName, ext) => "nft" + ext
      );
      const imageFile = new File([file], normalizeName, { type: file.type });
      const imageFileText = await imageFile.text();
      if (typeof nftData[imageFileText] !== "undefined") {
        return nftData[imageFileText];
      }
      const timerInit = Date.now();
      const metadataPromise = client
        .store({
          name: collectionName,
          description: "Stability Mintify Collection",
          image: imageFile,
        })
        .then((metadata) => {
          const timerEnd = Date.now();
          console.log(
            `Upload ${imageFile.name} to NFT Storage took ${
              timerEnd - timerInit
            }ms`
          );
          return { cid: metadata.ipnft };
        });

      setNftData((prev) => ({ ...prev, [imageFileText]: metadataPromise }));
      return metadataPromise;
    },
    [nftData, setNftData]
  );

  return { uploadNftData };
};
