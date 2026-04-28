import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className={`lc-field ${className}`}>
        {label && <label className="lc-label">{label}</label>}
        <input ref={ref} className="lc-input" {...props} />
      </div>
    )
  }
)

Input.displayName = 'Input'
