import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório*").email("Email inválido"),

  password: yup.string().required("Senha obrigatória*").min(6, "Tamanho mínimo de 6 caracteres"),
});