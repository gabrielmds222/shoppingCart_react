import React, { useState } from "react";
import "./App.css";

import Produto from "./components/Produto";
import Resumo from "./components/Resumo";

import Product from "./components/Produto/interfaces";
import products from "./data";

export default function App() {
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
                <Produto />
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
