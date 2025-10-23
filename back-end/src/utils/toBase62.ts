import { reverse } from "dns";

const toBase = (id: number) =>{
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let slug: string = '';

    let q = 1;

    while( q != 0){
        q = id % 62;
        id = Math.trunc(id/62);
        if(q != 0){
            slug += characters[q];
        }
    }
    return slug.split('').reverse().join('');

}

console.log(toBase(125));