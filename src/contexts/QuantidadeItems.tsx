import { createContext, useState } from "react";

export const QuantidadeItemContext = createContext<{
  quantidade: number;
  setQuantidade: React.Dispatch<React.SetStateAction<number>>;
}>({
  quantidade: 1,
  setQuantidade: () => {},
});

export const QuantidadeItemProvider = ({ children }: any) => {
  const [quantidade, setQuantidade] = useState<number>(1);

  return (
    <QuantidadeItemContext.Provider value={{ quantidade, setQuantidade }}>
      {children}
    </QuantidadeItemContext.Provider>
  );
};
