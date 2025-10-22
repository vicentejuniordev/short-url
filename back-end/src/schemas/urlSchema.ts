
import {z} from "zod";

export const Url = z.object({
    url: z.url()
})

export type UrlSchema = z.infer<typeof Url>