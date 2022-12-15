import { forwardRef, InputHTMLAttributes } from "react";
import { StyledFieldset } from "./style";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ type, label, id, ...rest }, ref) => {
    return (
      <StyledFieldset>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} {...rest} ref={ref} />
      </StyledFieldset>
    );
  }
);
