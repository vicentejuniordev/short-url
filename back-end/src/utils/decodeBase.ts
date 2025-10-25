import { characters } from "./toBase62";

const decode = async (slug: string) => {
  let slugDecode = 0;

  for (let i = 0; i < slug.length; i++) {
    const ch = slug[i];
    const index = characters.indexOf(ch as string);

    if (index === -1) continue; // ignora char inválido
    slugDecode = slugDecode * 62 + index;
  }

  return slugDecode;
};

export default decode;
