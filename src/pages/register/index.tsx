import { StyledMain, StyledLink as Link } from "./style";
import { BKCard } from "../../components/CardAside";
import { Input } from "../../components/Input";
import { MediumButton } from "../../components/Button/Medium";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validations/registerSchema";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface iRegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface iStatus {
  status: number;
}

export function RegisterPage() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<iRegisterData>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  async function userRegister(userData: iRegisterData) {

    try {

      setLoading(true);
      const { status } = await api.post<iStatus>("users", userData);

      if (status === 201) {

        reset();
        toast.success("Conta criada com sucesso");
        setTimeout(() => navigate("/login"), 4000);
      }
    } catch (error) {

      console.error(error);
      toast.error("Email já cadastrado");
    } finally {
      
      setLoading(false);
    }
  }

  return (
    <StyledMain>
      <div className="container">
        <BKCard />
        <form onSubmit={handleSubmit(userRegister)}>
          <div>
            <h2 className="title3">Cadastro</h2>
            <Link to="login">Retornar para o login</Link>
          </div>
          <Input
            type="text"
            label="Nome"
            id="name"
            placeholder="Digite seu nome"
            disabled={loading}
            {...register("name")}
            error={
              errors.name?.message && (
                <span aria-label="error">{errors.name.message}</span>
              )
            }
          />
          <Input
            type="email"
            label="Email"
            id="email"
            placeholder="Digite seu email"
            disabled={loading}
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
            disabled={loading}
            {...register("password")}
            error={
              errors.password?.message && (
                <span aria-label="error">{errors.password.message}</span>
              )
            }
          />
          <Input
            type="password"
            label="Confirmar senha"
            id="confirm_password"
            placeholder="Confirme sua senha"
            disabled={loading}
            {...register("confirm_password")}
            error={
              errors.confirm_password?.message && (
                <span aria-label="error">
                  {errors.confirm_password.message}
                </span>
              )
            }
          />
          <MediumButton disabled={loading} type="submit" btnGreen>
            {loading ? "Cadastrando" : "Cadastrar"}
          </MediumButton>
        </form>
      </div>
    </StyledMain>
  );
}
