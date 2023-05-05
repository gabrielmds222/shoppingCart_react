import React, { createContext, useState, useEffect } from "react";

import defaultProducts from "../data/product";
import Product from "../components/Produto/interfaces";

export const QuantidadeItemContext = createContext<{
  quantidadeTotal: number;
  setQuantidadeTotal: React.Dispatch<React.SetStateAction<number>>;
  precoFinal: number;
  setPrecoFinal: React.Dispatch<React.SetStateAction<number>>;
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Array<Product>>>;
  handleDelete: (id: number) => void;
}>({
  quantidadeTotal: 3,
  setQuantidadeTotal: () => {},
  precoFinal: 0,
  setPrecoFinal: () => {},
  products: defaultProducts,
  setProducts: () => {},
  handleDelete: () => {},
});

export const QuantidadeItemProvider = ({ children }: any) => {
  const [products, setProducts] = useState(defaultProducts);
  const [precoFinal, setPrecoFinal] = useState<number>(0);
  const [quantidadeTotal, setQuantidadeTotal] = useState<number>(3);

  function handleDelete(id: number) {
    setProducts(products.filter((el) => el.id !== id));
  }

  return (
    <QuantidadeItemContext.Provider
      value={{
        quantidadeTotal,
        setQuantidadeTotal,
        precoFinal,
        setPrecoFinal,
        products,
        setProducts,
        handleDelete,
      }}
    >
      {children}
    </QuantidadeItemContext.Provider>
  );
};
