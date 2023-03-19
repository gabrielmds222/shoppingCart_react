import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="lista-produtos">
        <h2>Carrinho de compras</h2>
        <p>Você tem 6 itens</p>
        <div className="produtos" style={{ border: "3px solid red" }}></div>
        <div className="resumo" style={{ border: "3px solid purple" }}></div>
      </div>
    </div>
  );
}
