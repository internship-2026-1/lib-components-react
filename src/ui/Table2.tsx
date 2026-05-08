import React from 'react'

type ProgressCellValue = string | number | React.ReactNode

export interface ProgressTableColumn {
  header: string
  accessor: string
  type?: 'text' | 'progress'
}

export interface ProgressTableRow {
  id?: string | number
  [key: string]: ProgressCellValue | undefined
}

export interface SpecificationRow {
  label: string
  value: string
}

export interface SpecificationSection {
  title: string
  icon?: React.ReactNode
  rows: SpecificationRow[]
}

export interface SimpleTableRow {
  label: string
  value: string
}

export type Table2Props =
  | {
      variant: 'progress'
      title?: string
      columns: ProgressTableColumn[]
      rows: ProgressTableRow[]
      rowKey?: string
    }
  | {
      variant: 'specifications'
      title?: string
      sections: SpecificationSection[]
    }
  | {
      variant: 'simple'
      title?: string
      rows: SimpleTableRow[]
    }

const getProgressValue = (value: ProgressCellValue | undefined): number => {
  if (typeof value === 'number') {
    return Math.max(0, Math.min(100, value))
  }

  if (typeof value === 'string') {
    const parsedValue = Number(value)

    if (!Number.isNaN(parsedValue)) {
      return Math.max(0, Math.min(100, parsedValue))
    }
  }

  return 0
}

const getRowKey = (
  row: ProgressTableRow,
  index: number,
  rowKey?: string
): string | number => {
  if (rowKey && row[rowKey] !== undefined) {
    const keyValue = row[rowKey]

    if (typeof keyValue === 'string' || typeof keyValue === 'number') {
      return keyValue
    }
  }

  if (row.id !== undefined) {
    return row.id
  }

  return index
}

export const Table2: React.FC<Table2Props> = (props) => {
  if (props.variant === 'progress') {
    if (!props.columns?.length) {
      return (
        <div className="lc-table-empty">
          No hay columnas para mostrar.
        </div>
      )
    }

    if (!props.rows?.length) {
      return (
        <div className="lc-table-empty">
          No hay datos para mostrar.
        </div>
      )
    }

    return (
      <div className="lc-table-container">
        {props.title && <h2 className="lc-table-title">{props.title}</h2>}

        <table className="lc-table">
          <thead>
            <tr>
              {props.columns.map((column) => (
                <th key={column.accessor}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {props.rows.map((row, rowIndex) => (
              <tr key={getRowKey(row, rowIndex, props.rowKey)}>
                {props.columns.map((column) => {
                  const cellValue = row[column.accessor]

                  if (column.type === 'progress') {
                    const progressValue = getProgressValue(cellValue)

                    return (
                      <td key={column.accessor}>
                        <div className="lc-progress">
                          <div
                            className="lc-progress-bar"
                            style={{ width: `${progressValue}%` }}
                          />
                        </div>
                      </td>
                    )
                  }

                  return (
                    <td key={column.accessor}>
                      {cellValue ?? ''}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (props.variant === 'simple') {
    if (!props.rows?.length) {
      return (
        <div className="lc-table-empty">
          No hay datos para mostrar.
        </div>
      )
    }

    return (
      <section className="lc-simple-table-container">
        {props.title && (
          <h2 className="lc-simple-table-title">
            {props.title}
          </h2>
        )}

        <div className="lc-simple-table">
          {props.rows.map((row, index) => (
            <div className="lc-simple-table-row" key={index}>
              <div className="lc-simple-table-label">
                {row.label}
              </div>

              <div className="lc-simple-table-value">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (!props.sections?.length) {
    return (
      <div className="lc-table-empty">
        No hay secciones para mostrar.
      </div>
    )
  }

  return (
    <section className="lc-specs-container">
      {props.title && <h2 className="lc-specs-main-title">{props.title}</h2>}

      <div className="lc-specs-grid">
        {props.sections.map((section, sectionIndex) => (
          <div className="lc-specs-section" key={sectionIndex}>
            <div className="lc-specs-section-header">
              {section.icon && (
                <span className="lc-specs-icon">
                  {section.icon}
                </span>
              )}

              <h3 className="lc-specs-section-title">
                {section.title}
              </h3>
            </div>

            <div className="lc-specs-title-line" />

            <div className="lc-specs-list">
              {section.rows.map((row, rowIndex) => (
                <div className="lc-specs-row" key={rowIndex}>
                  <div className="lc-specs-label">
                    {row.label}
                  </div>

                  <div className="lc-specs-value">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

Table2.displayName = 'Table2'