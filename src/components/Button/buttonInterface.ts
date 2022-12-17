import { InputHTMLAttributes } from "react";

export interface iButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  btnGreen?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface iStyledButtonProps {
  btnGreen?: boolean;
}
