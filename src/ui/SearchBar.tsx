import React, { useState } from 'react'
import useSearchBar, { SearchConfig } from './SearchBarHook'

const SearchBar = ({ config }: { config: SearchConfig }) => {
  const [inputValue, setInputValue] = useState('')
  const { results, loading, handleSearch } = useSearchBar(config)

  return (
    <div className="search-container">
      <div className="input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder={config.placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleSearch(inputValue)} disabled={loading}>
          {loading ? 'Cargando...' : config.buttonText}
        </button>
      </div>

      {results.length > 0 && (
        <ul className="results-list">
          {results.map((item, i) => (
            <li key={i}>{item[config.displayField] as string}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
