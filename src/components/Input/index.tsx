import { forwardRef, InputHTMLAttributes } from "react";
import { StyledFieldset } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  error: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, label, id, error, ...rest }, ref) => {
    return (
      <StyledFieldset>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} {...rest} ref={ref} />
        {error}
      </StyledFieldset>
    );
  }
);
