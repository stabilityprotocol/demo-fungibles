import { z } from "zod";

export const tokenNameSchema = z.string().min(1).max(50);
export const tokenSymbolSchema = z.string().min(2).max(4);
export const amountToMintSchema = z.string().refine(
  (v) => {
    const n = Number(v);
    return !isNaN(n) && v?.length > 0 && n < 999_999_999;
  },
  { message: "Invalid amount" }
);
