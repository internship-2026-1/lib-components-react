import React from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <label className={`lc-radio-card ${props.checked ? 'is-checked' : ''} ${className}`}>
        <input 
          type="radio" 
          ref={ref} 
          {...props} 
        />
        {/* Este div ahora es lo único que el usuario verá */}
        <div className="radio-circle"></div>
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';