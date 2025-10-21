import type { Request, Response } from "express";

const shortUrl = async (req: Request, res: Response) =>{
    console.log(req.body);
    res.send('Not implemented')
}

export default shortUrl;