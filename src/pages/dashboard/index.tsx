import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledDiv, StyledHeader, StyledMain } from "./style";
import logo from "../../img/logo.svg";
import { InputSearch } from "../../components/InputSearch";
import { FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MediumButton } from "../../components/Button/Medium";
import { Card } from "../../components/ProductCard";
import { CartContext } from "../../contexts/CartContext";
import { CartModal } from "../../components/CartModal";

export function DashboardPage() {

  const { products, logout } = useContext(UserContext);
  const { filteredProducts, searchItem, setSearchItem, addCart, currentSale, filterProducts, modal, setModal } = useContext(CartContext)

  return (
    <StyledDiv>
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="Logo do site Burguer Kenzie" />
          <div className="header_items">
            <InputSearch
              value={searchItem}
              onChange={(event) => setSearchItem(event.target.value)}
              onClick={() => filterProducts()}
            />
            <div className="header_btns">
              <div className="header_btns_cart">
                <MediumButton btnGreen onClick={() => setModal(true)}>
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
      {modal ? <CartModal /> : null}
    </StyledDiv>
  );
}
