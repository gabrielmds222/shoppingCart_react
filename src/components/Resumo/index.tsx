import React from "react";
import { Repeat } from "@phosphor-icons/react";

import "./style.css";

const Resumo = () => {
  return (
    <>
      <div className="box">
        <header>Resumo</header>

        <div className="info">
          <div>
            <span>Frete</span>
          </div>
          <div>
            <span>CEP</span>
            <div className="frete">
              <input type="text" />
              <button>
                <Repeat size={24} color="#fff" weight="bold" />
              </button>
            </div>
            <span>Preço</span>
          </div>
          <div>
            <span className="cidade">Cidade</span>
          </div>

          <div>
            <span>item</span>
            <span>R$ 100,00</span>
          </div>

          <div>
            <span>Frete</span>
            <span>R$50,00</span>
          </div>

          <div>
            <span>Total</span>
            <span>R$150,00</span>
          </div>

          <button>Fechar pedido</button>
        </div>
      </div>
    </>
  );
};

export default Resumo;
