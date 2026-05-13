import React from 'react'
import { Button } from './Button'
import { Input } from './Input'

export interface SearchBarProps {
  query: string
  placeholder?: string
  buttonText?: string
  onQueryChange: (value: string) => void
  onSearch: () => void
}

export default function SearchBar({
  query,
  placeholder = 'Buscar...',
  buttonText = 'Buscar',
  onQueryChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="search-container">
      <div className="input-wrapper">
        <Input
          value={query}
          placeholder={placeholder}
          onChange={(event) => onQueryChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSearch()
            }
          }}
        />
        <Button onClick={onSearch}>{buttonText}</Button>
      </div>
    </div>
  )
}