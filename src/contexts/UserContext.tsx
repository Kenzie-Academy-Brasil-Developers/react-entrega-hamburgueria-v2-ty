import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface iAuthContextProps {
  children: React.ReactNode;
}

interface iAuthContext {
  login: (userData: iLoginData) => Promise<void>;
  user: boolean;
  loadUserLoading: boolean;
  products: iProductsType[]
}

export interface iLoginData {
  email: string;
  password: string;
}

interface iUser {
  email: string;
  id: number;
}

interface iData {
  accessToken: string;
  user: iUser;
}

type iProductsArr = iProductsType[]

interface iProductsType {
  id: number
  name: string
  category: string
  price: number
  img: string
}

export const UserContext = createContext({} as iAuthContext);

export function UserProvider({ children }: iAuthContextProps) {

  const navigate = useNavigate();
  const [user, setUser] = useState(false)
  const [loadUserLoading, setLoadUserLoading] = useState(true);
  const [products, setProducts] = useState([] as iProductsArr)

  useEffect(() => {

    async function verifyToken() {

      const token = localStorage.getItem("@user_token");

      if (!token) {

        setLoadUserLoading(false);
        return;
      }

      try {

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const {data, status} = await api.get("products");

        if (status === 200) {

          setUser(true)
          setProducts(data)
        }
      } catch (error) {

        console.error(error);
      } finally {

        setLoadUserLoading(false);
      }
    }

    verifyToken();
  }, []);

  async function login(userData: iLoginData) {

    try {

      const { data } = await api.post<iData>("login", userData);

      localStorage.setItem("@user_token", data.accessToken);
      api.defaults.headers.common.authorization = `Bearer ${data.accessToken}`

      const { data: products } = await api.get<iProductsArr>("products");

      setUser(true)
      setProducts(products)
      navigate("/dashboard");
    } catch (error) {

      console.error(error);
      toast.error("Email ou senha incorreto");
    }
  }

  return (
    <UserContext.Provider value={{ login, user, loadUserLoading, products }}>
      {children}
    </UserContext.Provider>
  );
}
