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
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0
                  ? products.map((product: Product) => (
                      <Produto
                        id={product.id}
                        img={product.img}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                      />
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

{
  /* <main>
<div className="lista-produtos">
  <Title />
  <div className="produtos">
    <Produtos />
  </div>
  <div className="resumo">
    <Resumo />
  </div>
</div>
</main> */
}
