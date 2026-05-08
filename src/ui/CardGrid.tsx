import React from 'react'

export interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number
  gap?: number
}

export const CardGrid = React.forwardRef<HTMLDivElement, CardGridProps>(
  ({ columns = 3, gap = 20, className = '', children, ...props }, ref) => {
    const style = {
      '--grid-columns': columns,
      '--grid-gap': `${gap}px`,
    } as React.CSSProperties & Record<string, any>

    return (
      <div ref={ref} className={`lc-grid ${className}`.trim()} style={style} {...props}>
        {children}
      </div>
    )
  }
)

CardGrid.displayName = 'CardGrid'
