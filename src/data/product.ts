import GhostOfTsushima from "../../assets/ghostoftsushima.jpg";
import GodOfWar from "../../assets/godofwar.jpg";
import SpiderMan from "../../assets/spiderman.jpg";
// Arquivo de imagens
import Product from "../components/Produto/interfaces";

const products: Product[] = [
  {
    id: 1,
    img: GhostOfTsushima,
    name: "Ghost Of Tsushima",
    description:
      "Ghost of Tsushima é um jogo eletrônico de ação-aventura desenvolvido pela Sucker Punch Productions e publicado pela Sony Interactive Entertainment.",
    price: 204.9,
    quantidade: 1,
  },
  {
    id: 2,
    img: GodOfWar,
    name: "God of War: Ragnarok",
    description:
      "God of War Ragnarök é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment.",
    price: 246.31,
    quantidade: 1,
  },
  {
    id: 3,
    img: SpiderMan,
    name: "Spiderman Miles Morales",
    description:
      "Spider-Man: Miles Morales é um jogo eletrônico de ação-aventura desenvolvido pela Insomniac Games e publicado pela Sony Interactive Entertainment para o PlayStation 4 e PlayStation 5.",
    price: 184.99,
    quantidade: 1,
  },
];

export default products;
