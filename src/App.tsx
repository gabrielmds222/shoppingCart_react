import "./App.css";

import Produtos from "./components/Produtos";
import Resumo from "./components/Resumo";
import Title from "./components/Title";

export default function App() {
  return (
    <>
      <main>
        <Title />
        <div className="content">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                <Produtos />
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
