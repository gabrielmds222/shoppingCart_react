import "./App.css";

import Produtos from "./components/Produtos";
import Resumo from "./components/Resumo";

export default function App() {
  return (
    <div className="container" style={{ border: "3px solid #000" }}>
      <div className="lista-produtos">
        <h2>Carrinho de compras</h2>
        <p>Você tem 6 itens</p>
        <div className="produtos">
          <Produtos />
        </div>
        <div className="resumo">
          <Resumo />
        </div>
      </div>
    </div>
  );
}
