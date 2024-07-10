import { useRecoilState } from "recoil";
import { NftState } from "../State/NFT";
import { useCallback } from "react";

const nftStorageApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxNDg5NGYxYS03NThkLTRkMjItOWYyZC03OGFlZTJiYjMzMDYiLCJlbWFpbCI6ImRhbmllbEBzdGFiaWxpdHlwcm90b2NvbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNzNiMWJlOTM4MzEyMWMxYjExZGQiLCJzY29wZWRLZXlTZWNyZXQiOiJiMjIzZTRiMmIwNDJhZTIxNjY1YjdlYjU5NmQ0NTA0YjFiZGRkZDdlNDY4NTZkZTdmMGMwN2UxNzE0MzI2MDM0IiwiaWF0IjoxNzIwNjIyMDk4fQ.-LiNqH8fC2Vkkf--615FQUgRM-lYCv9-QcHbG5AF31M";

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

      const formData = new FormData();
      formData.append("file", imageFile);

      const pinataMetadata = JSON.stringify({
        name: collectionName,
      });
      formData.append("pinataMetadata", pinataMetadata);

      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", pinataOptions);

      const metadataPromise = fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${nftStorageApiKey}`,
          },
        }
      )
        .then((r) => r.json())
        .then((r) => ({ cid: r.IpfsHash }));
      console.log(metadataPromise);

      setNftData((prev) => ({ ...prev, [imageFileText]: metadataPromise }));
      return metadataPromise;
    },
    [nftData, setNftData]
  );

  return { uploadNftData };
};
