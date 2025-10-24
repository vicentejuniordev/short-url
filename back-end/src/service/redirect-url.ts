import decode from "../utils/decodeBase"
import prisma from "../lib";
const redirectUrl = async (slug: string)=>{
    const urlCode = await decode(slug);
    const urlOrginal = await prisma.urls.findUnique({
        where:{id: urlCode}
    })

    return urlOrginal?.url_original;
}

export default redirectUrl;