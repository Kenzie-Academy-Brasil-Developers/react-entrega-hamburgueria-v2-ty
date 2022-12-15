export interface iButtonProps {
  type?: "submit" | "reset" | "button";
  btnGreen?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface iStyledButtonProps {
  btnGreen?: boolean;
}
