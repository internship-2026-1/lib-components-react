import React from 'react';
// @ts-ignore
import '../styles.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  type?: string;
  changeValue?: (value: string | undefined) => void; 
  error?: string | null;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, changeValue, error, className = "", ...props }, ref) => {
    const inputClasses = `input-base ${error ? 'input-error' : ''} ${className}`;
    return (
      <input
        ref={ref}
        name={name}
        type={type}
        // Para evitar problemas se agrega ?. en caso de que changeValue sea undefined
        onChange= {(e) => changeValue?.(e.target.value)}
        className={inputClasses}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';