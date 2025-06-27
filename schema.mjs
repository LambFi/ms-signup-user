import { z } from "zod";
import { Countries } from "./countries.mjs";
import { Filter } from "bad-words";

const FilterBadWords = new Filter();

export const Costumer = z.object({

    name: z
    .string()
    .min(3)
    .max(60)
    .refine( ( Name ) => !FilterBadWords.isProfane( Name ) ),

    email: z
    .string()
    .email({ message: "Invalid email" }),

    password: z
    .string()
    .min(3)
    .max(100),

    country: z 
    .literal(Countries),

    company: z
    .string()
    .min(3)
    .max(50)
    .optional()
    .refine( ( Company ) => !FilterBadWords.isProfane( Company ) ),

    category_company : z
    .literal() ///@pending create category companies
    .optional(),

    monthly_income: z
    .number()
    .optional(),

    products_selected: z
    .literal(), ///@pending create names for our products

    condition_terms: z
    .boolean(),

    whitelist_wallet: z
    .object()
    .optional()
    
})