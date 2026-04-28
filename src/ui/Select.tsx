import React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, className = '', children, ...props }, ref) => {
    return (
      <div className={`lc-field ${className}`}>
        {label && <label className="lc-label">{label}</label>}
        <select ref={ref} className="lc-input" {...props}>
          {children}
        </select>
      </div>
    )
  }
)

Select.displayName = 'Select'
