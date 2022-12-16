import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { iProductsType } from "./UserContext";

interface iCartContextProps {
  children: React.ReactNode;
}

interface iCartContext {
  addCart: (item: iProductsType) => void;
  currentSale: iProductsType[];
}

export const CartContext = createContext({} as iCartContext);

export function CartProvider({ children }: iCartContextProps) {

  const [currentSale, setCurrentSale] = useState([] as iProductsType[]);

  function addCart(item: iProductsType) {

    if (!currentSale.find((element) => element.id === item.id)) {

      setCurrentSale([...currentSale, item]);
    } else {
        
      toast.warn("Não é possível adicionar o mesmo item ao carrinho");
    }
  }

  return (
    <CartContext.Provider value={{ addCart, currentSale }}>
      {children}
    </CartContext.Provider>
  );
}
