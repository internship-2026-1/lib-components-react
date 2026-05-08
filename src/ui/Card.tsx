import React from 'react'

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  image?: string
  imageAlt?: string
  title?: React.ReactNode
  description?: React.ReactNode
  footer?: React.ReactNode
  badge?: string
  tags?: string[]
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ image, imageAlt = '', title, description, footer, badge, tags, className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`lc-card ${className}`.trim()} {...props}>
        {image && (
          <div className="lc-card-image">
            <img src={image} alt={imageAlt} />
            {badge && <span className="lc-card-badge">{badge}</span>}
          </div>
        )}
        {!image && badge && (
          <div className="lc-card-content" style={{paddingBottom: 0}}>
            <span className="lc-card-badge" style={{position:'static'}}>{badge}</span>
          </div>
        )}
        <div className="lc-card-content">
          {title && <h3 className="lc-card-title">{title}</h3>}
          {description && <p className="lc-card-description">{description}</p>}
          {tags && tags.length > 0 && (
            <div className="lc-card-tags">
              {tags.map((tag) => (
                <span key={tag} className="lc-card-tag">{tag}</span>
              ))}
            </div>
          )}
          {children}
        </div>
        {footer && <div className="lc-card-footer">{footer}</div>}
      </div>
    )
  }
)

Card.displayName = 'Card'
