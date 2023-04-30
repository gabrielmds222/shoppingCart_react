import React, { useState } from "react";
import "./App.css";

import Produto from "./components/Produto";
import Resumo from "./components/Resumo";

import defaultProducts from "./data/product";

export default function App() {
  const [products, setProducts] = useState(defaultProducts);

  function handleDelete(id: number) {
    setProducts(products.filter((el) => el.id !== id));
  }

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
                {products.length > 0
                  ? products.map((product) => (
                      <Produto product={product} handleDelete={handleDelete} />
                    ))
                  : "Nenhum item no carrinho"}
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
