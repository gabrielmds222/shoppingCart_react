import React, { useState, useEffect } from "react";
import { Repeat } from "@phosphor-icons/react";

import "./style.css";

import api from "../../api";

type ResponseCepDataType = {
  cep: string;
  localidade: string;
  uf: string;
};

const Resumo = () => {
  const [user, setUser] = useState<ResponseCepDataType>();
  const [cepDigitado, setCepDigitado] = useState<string>("");

  async function handleCep(e: any) {
    e.preventDefault();
    api
      .get(`/${cepDigitado}/json`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    // if (user?.uf === "RN") {
    //   setPrecoFrete(precoFrete + 20);
    //   console.log("preco frete 2", precoFrete);
    // } else {
    //   setPrecoFrete(precoFrete + 40);
    // }

    if (!cepDigitado) {
      setUser({ cep: "", localidade: "", uf: "" });
    }
  }

  const hasCepValueRN = user?.uf === "RN" ? 20 : user?.uf ? 40 : 0;

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
              <button
                type="submit"
                style={{
                  backgroundColor: "#4DE1C1",
                  border: "none",
                  borderRadius: "5px",
                  marginLeft: "5px",
                  padding: "5px",
                }}
              >
                <Repeat size={24} color="#fff" weight="bold" />
              </button>
            </form>
            <span>{hasCepValueRN}</span>
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
