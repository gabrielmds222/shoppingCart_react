import Pizza from "../../assets/imgPizza.jpg";
// Arquivo de imagens
import Product from "../components/Produto/interfaces";

const products: Product[] = [
  {
    id: 1,
    img: Pizza,
    name: "Pizza",
    description: "Pizza 1",
    price: 59.99,
    quantidade: 1,
  },
  {
    id: 2,
    img: Pizza,
    name: "Pizza",
    description: "Pizza 2",
    price: 79.99,
    quantidade: 1,
  },
  {
    id: 3,
    img: Pizza,
    name: "Pizza",
    description: "Pizza do 3",
    price: 59.99,
    quantidade: 1,
  },
];

export default products;
