import { Input } from "../../components/Input";
import { StyledDiv, StyledLink as Link } from "./style";
import { MediumButton } from "../../components/Button/Medium";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validations/loginSchema";
import { iLoginData, UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { BKCard } from "../../components/BKCard";

export function LoginPage() {  

  const { register, handleSubmit, formState: { errors } } = useForm<iLoginData>({
    mode: "onChange",
    resolver: yupResolver(loginSchema)
  });

  const { login } = useContext(UserContext)

  return (
    <StyledDiv>
      <main className="container">
        <BKCard />
        <form
          onSubmit={handleSubmit(login)}
        >
          <h2 className="title3">Login</h2>
          <Input
            type="email"
            label="Email"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
            error={
              errors.email?.message && (
                <span aria-label="error">{errors.email.message}</span>
              )
            }
          />
          <Input
            type="password"
            label="Senha"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
            error={
              errors.password?.message && (
                <span aria-label="error">{errors.password.message}</span>
              )
            }
          />
          <MediumButton type="submit" btnGreen>
            Logar
          </MediumButton>
          <p className="body">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <Link to="/register">Cadastrar</Link>
        </form>
      </main>
    </StyledDiv>
  );
}
