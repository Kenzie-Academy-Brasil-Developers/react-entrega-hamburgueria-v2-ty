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
import { CartContext } from "../../contexts/CartContext";

export function DashboardPage() {

  const { products, logout } = useContext(UserContext);
  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([] as iProductsType[]);
  const { addCart, currentSale } = useContext(CartContext)

  function filterProducts() {

    setFilteredProducts(
      products.filter(({ name }) =>
        name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
      )
    );
  }

  return (
    <StyledDiv>
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="Logo do site Burguer Kenzie" />
          <InputSearch
            value={searchItem}
            onChange={(event) => setSearchItem(event.target.value)}
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
