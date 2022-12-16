import { FiShoppingBag } from "react-icons/fi";
import logo from "../../img/logo.svg";
import { StyledDiv } from "./style";

export function BKCard() {

  return (
    <StyledDiv>
      <img src={logo} alt="Logo do site Burguer Kenzie" />
      <div>
        <div className="bag_square">
          <span>
            <FiShoppingBag />
          </span>
        </div>
        <p className="headline">
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </div>
    </StyledDiv>
  );
}
