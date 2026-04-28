import React from 'react'

export interface FormFieldProps {
  label?: string
  name?: string
  error?: string | null
  children: React.ReactNode
}

export const FormField: React.FC<FormFieldProps> = ({ label, name, error, children }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}
      {children}
  {error && <p className="lc-error">{error}</p>}
    </div>
  )
}

FormField.displayName = 'FormField'
