import React from "react";

const Produtos = () => {
  return (
    <>
      <div className="iten-content">
        <img src="#" alt="Imagem do produto" />
        <div className="item-description">
          <p>Pizza</p>
          <p>Pizza de calabresa</p>
          <p>R$60,00</p>

          <input type="number" />
        </div>
      </div>
      <div>
        <p>R$60,00</p>
        <button>Lixo</button>
      </div>
    </>
  );
};

export default Produtos;
