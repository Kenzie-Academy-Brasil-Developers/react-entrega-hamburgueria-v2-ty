import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledDiv, StyledHeader, StyledMain } from "./style";
import logo from "../../img/logo.svg";
import { InputSearch } from "../../components/InputSearch";
import { FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MediumButton } from "../../components/Button/Medium";
import { Card } from "../../components/ProductCard";
import { iProductsType } from "../../contexts/UserContext";
import { toast } from "react-toastify";

export function DashboardPage() {

  const { products, logout } = useContext(UserContext);
  const [value, setValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([] as iProductsType[]);
  const [currentSale, setCurrentSale] = useState([] as iProductsType[]);

  function filterProducts() {

    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  }

  function addCart(item: iProductsType) {

    if (!currentSale.find((element) => element.id === item.id)) {

      setCurrentSale([...currentSale, item]);
    } else {
        
      toast.warn("Não é possível adicionar o mesmo item ao carrinho");
    }
  }

  return (
    <StyledDiv>
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="Logo do site Burguer Kenzie" />
          <InputSearch
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onClick={() => filterProducts()}
          />
          <div>
            <div>
              <MediumButton btnGreen>
                Ver carrinho <FaShoppingCart />
              </MediumButton>
              <div className="cart_length">
                <p>{currentSale.length}</p>
              </div>
            </div>
            <MediumButton onClick={() => logout()}>
              Sair <RiLogoutBoxRLine />
            </MediumButton>
          </div>
        </div>
      </StyledHeader>
      <StyledMain>
        <ul className="container">
          {filteredProducts.length > 0
            ? filteredProducts.map((item) => (
                <Card key={item.id} item={item} onClick={() => addCart(item)} />
              ))
            : products.map((item) => (
                <Card key={item.id} item={item} onClick={() => addCart(item)} />
              ))}
        </ul>
      </StyledMain>
    </StyledDiv>
  );
}
