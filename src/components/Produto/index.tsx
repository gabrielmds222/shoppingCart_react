import Product from "./interfaces";
import products from "../../data/product";

import { Trash } from "@phosphor-icons/react";
import "./style.css";

import { useContext } from "react";
import { QuantidadeItemContext } from "../../contexts/QuantidadeItems";

interface ProductProps {
  product: Product;
}

const Produto = ({ product }: ProductProps) => {
  const {
    products,
    setProducts,
    quantidadeTotal,
    setQuantidadeTotal,
    handleDelete,
  } = useContext(QuantidadeItemContext);

  return (
    <>
      <tr>
        <td>
          <div className="produto">
            <img src={product.img} />
            <div className="infos">
              <div className="nome">{product.name}</div>
              <div className="descricao">{product.description}</div>
              <div className="preco">
                R$ {product.price.toFixed(2).toString()}
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="qty">
            <input
              type="number"
              value={product.quantidade}
              onChange={(event) =>
                setProducts(
                  products.map((p) => {
                    if (p.id === product.id) {
                      const novoValor = parseFloat(event.target.value) || 0;
                      const novoTotal =
                        novoValor > p.quantidade
                          ? quantidadeTotal + 1
                          : quantidadeTotal - 1;
                      p.quantidade = novoValor;
                      setQuantidadeTotal(novoTotal);
                    }
                    return p;
                  })
                )
              }
            />
          </div>
        </td>
        <td>R$ {(product.quantidade * product.price).toFixed(2).toString()}</td>
        <td>
          <button className="remove" onClick={() => handleDelete(product.id)}>
            <Trash size={32} color="#666" weight="bold" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Produto;
