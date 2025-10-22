import type { NextFunction, Request, Response } from "express";
import { ZodError, type ZodTypeAny } from "zod";

const validationSchema = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) =>{
    try{
        schema.parse(req.body);
        next();
    }catch(err){
        if(err instanceof ZodError){
            return res.status(400).json({
                errors: err.issues.map((err)=> err.message)
            })
        }
        next(err);
    }
}   

export default validationSchema