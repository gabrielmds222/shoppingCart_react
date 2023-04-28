import React, { useState } from "react";

import Product from "./interfaces";
import products from "../../data";

import { Trash } from "@phosphor-icons/react";
import "./style.css";

const Produto = () => {
  const [quantidade, setQuantidade] = useState<number>(1);
  const [removedItem, setRemovedItem] = useState<Array<any>>([]);

  const handleRemove = (idToRemove: number) => {
    if (removedItem.includes(idToRemove)) {
      setRemovedItem(removedItem.filter((id) => id !== idToRemove));
    } else {
      setRemovedItem([...removedItem, idToRemove]);
    }
  };

  const filteredProducts: Array<any> = products.filter(
    (p) => !removedItem.includes(p.id)
  );

  return (
    <>
      {filteredProducts.length > 0
        ? filteredProducts.map((product) => (
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
                    value={quantidade}
                    onChange={(e) => setQuantidade(parseFloat(e.target.value))}
                  />
                </div>
              </td>
              <td>R$ {(quantidade * product.price).toFixed(2).toString()}</td>
              <td>
                <button
                  className="remove"
                  onClick={() => handleRemove(product.id)}
                >
                  <Trash size={32} color="#666" weight="bold" />
                </button>

                {/* <button onClick={() => console.log("apertou", id)}>Botão</button> */}
              </td>
            </tr>
          ))
        : "Nenhum item no carrinho"}
    </>
  );
};

export default Produto;
