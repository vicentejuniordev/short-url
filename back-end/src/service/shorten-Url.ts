import prisma from "../lib"
import toBase from "../utils/toBase62"


const shortenUrl = async (url: string) =>{
    const date = new Date()
    const newUrl = await prisma.urls.create({
        data:{
            created_data:  date,
            url_original: url,
        }
    })

    const resUrl = await prisma.urls.update({
        where:{
            id: newUrl.id
        },
        data:{
            slug: await toBase(Number(newUrl.id))
        }
    })

    return `http://localhost:3000/${await toBase(Number(newUrl.id))}`
}

export default shortenUrl