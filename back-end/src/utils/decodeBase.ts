import { characters } from "./toBase62"

const decode = async (slug: string)=>{
    let slugDecode: number = 0;
    const slugSplit = slug.split('').reverse();
    for(let i = slugSplit.length; i > 0; i--){
        const ch = slugSplit[i - 1];
        if (ch === undefined) continue;
        let index = characters.indexOf(ch); 
        slugDecode += index * Math.pow(62, i - 1)
    }
    return slugDecode
}
