import React, { useState, useEffect } from "react";
import { Repeat } from "@phosphor-icons/react";

import "./style.css";

import api from "../../api";

type ResponseCepDataType = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

const Resumo = () => {
  const [user, setUser] = useState<ResponseCepDataType>();
  const [cepDigitado, setCepDigitado] = useState<string>("");
  const [precoFrete, setPrecoFrete] = useState<number>(0);

  async function handleCep(e: any) {
    e.preventDefault();
    api
      .get(`/${cepDigitado}/json`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  function verificaCep() {
    if (user?.uf === "RN") {
      setPrecoFrete(precoFrete + 20);
    } else {
      setPrecoFrete(precoFrete + 40);
    }
  }

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
            <form className="frete" onSubmit={handleCep}>
              <input
                type="text"
                value={cepDigitado}
                onChange={(e) => setCepDigitado(e.target.value)}
              />
              <button type="submit" onClick={() => verificaCep}>
                <Repeat size={24} color="#fff" weight="bold" />
              </button>
            </form>
            <span>{precoFrete}</span>
          </div>
          <div>
            <span className="cidade">{user?.localidade}</span>
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

          <div className="btn-container">
            <button>Fechar pedido</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resumo;
