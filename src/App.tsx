import React, { useState } from "react";
import "./App.css";

import Produto from "./components/Produto";
import Resumo from "./components/Resumo";

import Product from "./components/Produto/interfaces";
import products from "./data";

export default function App() {
  // const [inicialList, setInicialList] = useState(products);

  // function removeProduto() {
  //   console.log("Fui clicado");
  // }

  // setInicialList;

  return (
    <>
      <main>
        <div className="page-title">
          <h2>Carrinho de compras</h2>
          <p>Você tem X itens</p>
        </div>
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* {products.length > 0
                  ? products.map((product: Product) => ( */}
                <Produto />
                {/* ))
                  : "Nenhum item no carrinho"} */}
              </tbody>
            </table>
          </section>
          <aside>
            <Resumo />
          </aside>
        </div>
      </main>
    </>
  );
}
