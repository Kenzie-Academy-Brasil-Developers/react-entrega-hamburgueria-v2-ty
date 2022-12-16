import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledDiv, StyledHeader, StyledMain } from "./style";
import logo from "../../img/logo.svg";
import { InputSearch } from "../../components/InputSearch";
import { FaShoppingCart } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri"
import { MediumButton } from "../../components/Button/Medium";
import { Card } from "../../components/ProductCard";

export function DashboardPage() {

  const { products } = useContext(UserContext);
  const [value, setValue] = useState("");

  return (
    <StyledDiv>
      <StyledHeader>
        <div className="container">
          <img src={logo} alt="Logo do site Burguer Kenzie" />
          <InputSearch
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <div>
            <MediumButton btnGreen>Ver carrinho <FaShoppingCart /></MediumButton>
            <MediumButton>Sair <RiLogoutBoxRLine /></MediumButton>
          </div>
        </div>
      </StyledHeader>
      <StyledMain>
        <ul className="container">
            {products.map((item) => <Card key={item.id} item={item} />)}
        </ul>
      </StyledMain>
    </StyledDiv>
  );
}
