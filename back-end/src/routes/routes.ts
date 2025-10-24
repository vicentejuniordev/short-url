import { Router } from "express";
import shortUrl from "../controllers/url-controller";
import validationSchema from "../middleware/validationSchema";
import { Url } from "../schemas/urlSchema";
import redirect from "../controllers/redirect-controller";
const routes = Router();

routes.get('/', async (req, res)=>{
    res.json({message:'hello World'})
})
routes.post('/urlshort',validationSchema(Url), shortUrl);
routes.get('/:slug', redirect);

export default routes;