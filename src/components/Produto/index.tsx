import React, { useState } from "react";

import Product from "./interfaces";
import products from "../../data/product";

import { Trash } from "@phosphor-icons/react";
import "./style.css";

interface ProductProps {
  product: Product;
  handleDelete(id: number): void;
}

const Produto = ({ product, handleDelete }: ProductProps) => {
  const [quantidade, setQuantidade] = useState<number>(1);

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
              value={quantidade}
              onChange={(event) => {
                const newValue = parseFloat(event.target.value);
                if (newValue >= 0) {
                  setQuantidade(newValue);
                } else {
                  setQuantidade(0);
                }
              }}
            />
          </div>
        </td>
        <td>R$ {(quantidade * product.price).toFixed(2).toString()}</td>
        <td>
          <button className="remove" onClick={() => handleDelete(product.id)}>
            <Trash size={32} color="#666" weight="bold" />
          </button>

          {/* <button
                  onClick={(event) => handleClick(event, "Clicou no botão")}
                >
                  Botão
                </button> */}
        </td>
      </tr>
    </>
  );
};

export default Produto;
