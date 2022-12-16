import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório*"),
  email: yup.string().required("Email obrigatório*").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória*")
    .min(6, "Tamanho mínimo de 6 caracteres"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
});
