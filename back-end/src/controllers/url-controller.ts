import type { Request, Response } from "express";
import shortenUrl from "../service/shorten-Url";

const shortUrl = async (req: Request, res: Response) =>{
    const url = req.body.url;
    const response = await shortenUrl(url)
    res.send(response)
}   

export default shortUrl;