import React from 'react'

export interface PromoCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode
  description?: React.ReactNode
  backgroundColor?: string
}

export const PromoCard = React.forwardRef<HTMLDivElement, PromoCardProps>(
  ({ title, description, backgroundColor = '#0056C3', className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`lc-promo-card ${className}`.trim()} style={{ backgroundColor }} {...props}>
        <div className="lc-promo-card-content">
          {title && <h2 className="lc-promo-card-title">{title}</h2>}
          {description && <p className="lc-promo-card-description">{description}</p>}
          {children}
        </div>
        {/* Tag icon decoration */}
        <div className="lc-promo-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 3H4a1 1 0 0 0-1 1v5.5a1 1 0 0 0 .293.707l10 10a1 1 0 0 0 1.414 0l5.5-5.5a1 1 0 0 0 0-1.414l-10-10A1 1 0 0 0 9.5 3Z" />
            <circle cx="7" cy="7" r="1.5" fill="white" stroke="none" />
          </svg>
        </div>
      </div>
    )
  }
)

PromoCard.displayName = 'PromoCard'
