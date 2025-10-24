import type { Request, Response } from "express";
import redirectUrl from "../service/redirect-url";


const redirect = async (req: Request, res: Response)=>{
    const slug = req.params.slug;
    if(!slug){
        res.status(400).json({error: 'not found'});
    }else{
        const urlOriginal = await redirectUrl(slug);
        console.log(urlOriginal);
    }
    res.json({message: 'not impelemented'})
}

export default redirect