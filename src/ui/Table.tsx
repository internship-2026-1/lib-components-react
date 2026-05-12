import React, { useState } from 'react'

export type Column<T> = {
  key: keyof T | string
  header: string
  render?: (row: T) => React.ReactNode
  className?: string
}

type TableProps<T> = {
  data: T[]
  columns: Column<T>[]
  keyField?: keyof T
  emptyMessage?: string
  itemsPerPage?: number
}


export function Table<T>({
  data,
  columns,
  keyField,
  emptyMessage = 'No data available',
  itemsPerPage = 10
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedData = data.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1)
      }

      if (startPage > 1) {
        pages.push(1)
        if (startPage > 2) {
          pages.push('...')
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...')
        }
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="table-root">
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col.key)} className={col.className}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length === 0 && data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="table-empty">
                {emptyMessage}
              </td>
            </tr>
          )}

          {paginatedData.map((row, i) => (
            <tr key={keyField ? String(row[keyField]) : startIndex + i}>
              {columns.map((col) => (
                <td key={String(col.key)} className={col.className}>
                  {col.render
                    ? col.render(row)
                    : (row[col.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {data.length > 0 && (
        <footer className="table-footer">
          <div className="pagination">
            <button
              className="pagination-btn pagination-prev"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            <div className="pagination-numbers">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  className={`pagination-number ${
                    page === currentPage ? 'active' : ''
                  } ${typeof page === 'string' ? 'ellipsis' : ''}`}
                  onClick={() => typeof page === 'number' && handlePageClick(page)}
                  disabled={typeof page === 'string'}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className="pagination-btn pagination-next"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>

            <span className="pagination-info">
              Página {currentPage} de {totalPages}
            </span>
          </div>
        </footer>
      )}
    </div>
  )
}
