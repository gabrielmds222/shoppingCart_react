import React, { createContext, useState, useEffect } from "react";

import defaultProducts from "../data/product";
import Product from "../components/Produto/interfaces";

export const QuantidadeItemContext = createContext<{
  quantidadeTotal: number;
  setQuantidadeTotal: React.Dispatch<React.SetStateAction<number>>;
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Array<Product>>>;
  handleDelete: (id: number) => void;
}>({
  quantidadeTotal: 3,
  setQuantidadeTotal: () => {},
  products: defaultProducts,
  setProducts: () => {},
  handleDelete: () => {},
});

export const QuantidadeItemProvider = ({ children }: any) => {
  const [products, setProducts] = useState(defaultProducts);
  const [quantidadeTotal, setQuantidadeTotal] = useState<number>(3);

  function handleDelete(id: number) {
    console.log("click 1", id);
    setProducts(products.filter((el) => el.id !== id));
    console.log("click 2", id);
  }
  return (
    <QuantidadeItemContext.Provider
      value={{
        quantidadeTotal,
        setQuantidadeTotal,
        products,
        setProducts,
        handleDelete,
      }}
    >
      {children}
    </QuantidadeItemContext.Provider>
  );
};
