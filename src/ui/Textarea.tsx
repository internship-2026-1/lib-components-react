import React from 'react'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <div className={`lc-field ${className}`}>
        {label && <label className="lc-label">{label}</label>}
        <textarea ref={ref} className="lc-input" {...props} />
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
