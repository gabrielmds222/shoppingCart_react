import React, { useState } from "react";

import Product from "./interfaces";

import { Trash } from "@phosphor-icons/react";
import "./style.css";

const Produto = ({ id, img, name, description, price }: Product) => {
  const [quantidade, setQuantidade] = useState<number>(1);
  return (
    <tr>
      <td>
        <div className="produto">
          <img src={img} />
          <div className="infos">
            <div className="nome">{name}</div>
            <div className="descricao">{description}</div>
            <div className="preco">R$ {price.toFixed(2).toString()}</div>
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
      <td>R$ {(quantidade * price).toFixed(2).toString()}</td>
      <td>
        <button className="remove">
          <Trash size={32} color="#666" weight="bold" />
        </button>
      </td>
    </tr>
  );
};

export default Produto;
