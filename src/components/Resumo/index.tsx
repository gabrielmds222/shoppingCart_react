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
  const [cpfDigitado, setCpfDigitado] = useState<string>("");

  async function handleCep(e: any) {
    e.preventDefault();
    api
      .get(`/${cpfDigitado}/json`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  return (
    <>
      <div className="box">
        <header>Resumo: {user?.localidade}</header>

        <div className="info">
          <div>
            <span>Frete: {user?.uf}</span>
          </div>
          <div>
            <span>CEP</span>
            <form className="frete" onSubmit={handleCep}>
              <input
                type="text"
                value={cpfDigitado}
                onChange={(e) => setCpfDigitado(e.target.value)}
              />
              <button type="submit">
                <Repeat size={24} color="#fff" weight="bold" />
              </button>
            </form>
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

          <div className="btn-container">
            <button>Fechar pedido</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resumo;
