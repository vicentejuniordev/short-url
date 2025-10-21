import { Router } from "express";
import shortUrl from "../controllers/url-controller";

const routes = Router();

routes.get('/', async (req, res)=>{
    res.json({message:'hello World'})
})
routes.post('/urlshort', shortUrl);

export default routes;