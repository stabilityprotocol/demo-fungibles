import { z } from "zod";

export const tokenNameSchema = z.string().min(4).max(50);
export const collectionDescriptionSchema = z.string().min(2).max(50);
