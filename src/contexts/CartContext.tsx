import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { iProductsType, UserContext } from "./UserContext";

interface iCartContextProps {
  children: React.ReactNode;
}

interface iCartContext {
  filteredProducts: iProductsType[]
  searchItem: string;
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
  addCart: (item: iProductsType) => void;
  currentSale: iProductsType[];
  filterProducts: () => void;
  cartTotal: number;
  cleanCart: () => void;
  removeCartItem: (removeItem: iProductsType) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartContext = createContext({} as iCartContext);

export function CartProvider({ children }: iCartContextProps) {

  const [currentSale, setCurrentSale] = useState([] as iProductsType[]);
  const [filteredProducts, setFilteredProducts] = useState([] as iProductsType[]);
  const [searchItem, setSearchItem] = useState("");
  const [cartTotal, setCartTotal] = useState(0)
  const [modal, setModal] = useState(false)
  const { products } = useContext(UserContext)

  function addCart(item: iProductsType) {

    if (!currentSale.find((element) => element.id === item.id)) {

      setCurrentSale([...currentSale, item]);
      toast.success(`${item.name} foi adicionado ao carrinho`);
    } else {
        
      toast.warn("Não é possível adicionar o mesmo item ao carrinho");
    }
  }

  function filterProducts() {

    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
      )
    );
  }

  useEffect(() => {

    setCartTotal(currentSale.reduce((current, previous) => current + previous.price, 0));
  }, [currentSale]);

  const cleanCart = () => {

    setCurrentSale([])
    setModal(false)
    toast.success("Todos os itens foram removidos do carrinho")
  }

  const removeCartItem = (removeItem: iProductsType) => {

    const filterItems = currentSale.filter((item) => item !== removeItem)
    setCurrentSale([...filterItems])
  }

  return (
    <CartContext.Provider
      value={{
        filteredProducts,
        searchItem,
        setSearchItem,
        addCart,
        currentSale,
        filterProducts,
        cartTotal,
        cleanCart,
        removeCartItem,
        modal,
        setModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
