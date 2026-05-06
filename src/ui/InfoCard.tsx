import React from 'react'

export interface InfoCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  icon?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
}

export const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  ({ icon, title, description, className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`lc-info-card ${className}`.trim()} {...props}>
        {icon && <div className="lc-info-card-icon">{icon}</div>}
        <div className="lc-info-card-content">
          {title && <h4 className="lc-info-card-title">{title}</h4>}
          {description && <p className="lc-info-card-description">{description}</p>}
          {children}
        </div>
      </div>
    )
  }
)

InfoCard.displayName = 'InfoCard'
