import React from 'react';
// @ts-ignore
import '../styles.css';

export interface FormFieldProps {
  name?: string;
  label?: string;
  error?: string | null;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ name, label, error, children }) => {
  return (
    <div className="form-field" data-name={name}>
      {
        label && <label className="form-label">{label}</label>
      }

      {/* Espacio vacio */}
      <div className="w-full">
        {children}
      </div>

      {error && (
        <span className="error-text">
          {error}
        </span>
      )}
    </div>
  );
};

FormField.displayName = 'FormField';