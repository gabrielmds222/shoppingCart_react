import React, { useState, useEffect, useContext } from "react";
import { Repeat } from "@phosphor-icons/react";

import "./style.css";
import Product from "../Produto/interfaces";

import api from "../../api";
import { QuantidadeItemContext } from "../../contexts/QuantidadeItems";
import BotaoConfirmar from "../BotaoConfirmar";

type ResponseCepDataType = {
  cep: string;
  localidade: string;
  uf: string;
};

const Resumo = () => {
  let valorTotal = 0;
  const [user, setUser] = useState<ResponseCepDataType>();
  const [cepDigitado, setCepDigitado] = useState<string>("");
  const { products, setProducts, quantidadeTotal, precoFinal, setPrecoFinal } =
    useContext(QuantidadeItemContext);

  async function handleCep(e: any) {
    e.preventDefault();
    api
      .get(`/${cepDigitado}/json`)
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    if (!cepDigitado) {
      setUser({ cep: "", localidade: "", uf: "" });
    }
  }

  const hasCepValueRN = user?.uf === "RN" ? 20 : user?.uf ? 40 : 0;

  // onChange={() => {
  //   // Soma o valor total dos produtos
  //   products.forEach((item) => {
  //     valorTotal += item.quantidade * item.price;
  //   });
  //   // Exibe o valor total no console
  //   console.log(`O valor total é: ${valorTotal}`);
  // }}

  useEffect(() => {
    function somaPreco() {
      let valorTotal = 0;
      products.forEach((item) => {
        valorTotal += item.quantidade * item.price;
      });
      return valorTotal;
    }
    setPrecoFinal(somaPreco());
  }, [products]);

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
            <span>R$ {hasCepValueRN}</span>
          </div>
          <div>
            <span className="cidade">{user?.localidade}</span>
          </div>

          <div>
            {quantidadeTotal > 1 ? (
              <span>itens ({quantidadeTotal})</span>
            ) : (
              <span>item ({quantidadeTotal})</span>
            )}
            <span>R$ {precoFinal}</span>
          </div>

          <div>
            <span>Frete</span>
            <span>R$ {hasCepValueRN}</span>
          </div>

          <div>
            <span>Total</span>
            <span>R$ {precoFinal + hasCepValueRN}</span>
          </div>
        </div>
        <div className="btn-container">
          <BotaoConfirmar />
        </div>
      </div>
    </>
  );
};

export default Resumo;

// array.forEach(
//   (item) => { valorTotal += item.quantidade * item.preço; }
//   );
