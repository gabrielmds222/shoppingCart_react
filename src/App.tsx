import "./App.css";

import { QuantidadeItemProvider } from "./contexts/QuantidadeItems";
import CarrinhoDeCompras from "./pages";

export default function App() {
  return (
    <QuantidadeItemProvider>
      <CarrinhoDeCompras />
    </QuantidadeItemProvider>
  );
}
