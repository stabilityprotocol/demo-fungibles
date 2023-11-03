import { z } from "zod";

export const tokenNameSchema = z.string().min(4).max(50);
