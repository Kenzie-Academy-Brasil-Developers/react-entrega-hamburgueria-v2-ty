import { Input } from "../../components/Input";
import { StyledDiv } from "./style";
import logo from "../../img/logo.svg";
import { MediumButton } from "../../components/Button/Medium";
import { FiShoppingBag } from "react-icons/fi";
import { useForm } from "react-hook-form";

interface iLoginData {
  email: string;
  password: string;
}

export function LoginPage() {

  const { register, handleSubmit } = useForm<iLoginData>();

  return (
    <StyledDiv>
      <div className="container">
        <div className="infos">
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
        </div>
        <form
          className="login_container"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <h2 className="title3">Login</h2>
          <Input
            type="email"
            label="Email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <Input
            type="password"
            label="Senha"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <MediumButton type="submit" btnGreen>
            Logar
          </MediumButton>
          <p className="body">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <MediumButton type="button">Cadastrar</MediumButton>
        </form>
      </div>
    </StyledDiv>
  );
}
