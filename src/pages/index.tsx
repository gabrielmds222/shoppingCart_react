import React, { useState, useContext } from "react";

import Produto from "../components/Produto";
import Resumo from "../components/Resumo";

import { QuantidadeItemContext } from "../contexts/QuantidadeItems";

const CarrinhoDeCompras = () => {
  const { products, setProducts, quantidadeTotal } = useContext(
    QuantidadeItemContext
  );
  return (
    <main>
      <div className="page-title">
        <h2>Carrinho de compras</h2>
        {quantidadeTotal > 1 ? (
          <p>Você tem {quantidadeTotal} itens</p>
        ) : (
          <p>Você tem {quantidadeTotal} item</p>
        )}
      </div>
      <div className="content">
        <section>
          <table>
            <thead>
              <tr>
                <th colSpan={4}></th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0
                ? products.map((product) => <Produto product={product} />)
                : "Nenhum item no carrinho"}
            </tbody>
          </table>
        </section>
        <aside>
          <Resumo />
        </aside>
      </div>
    </main>
  );
};

export default CarrinhoDeCompras;
