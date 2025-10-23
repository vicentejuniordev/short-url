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
            slug: await toBase(newUrl.id)
        }
    })

    return `http://encurtaai.ly/${await toBase(newUrl.id)}`
}

export default shortenUrl