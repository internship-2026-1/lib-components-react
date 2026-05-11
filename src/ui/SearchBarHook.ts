import { useState } from 'react'

export type SearchConfig = {
  url: string
  fields: string[]
  displayField: string
  placeholder: string
  buttonText: string
}

const fetchData = async (url: string, query: string, fields: string[]): Promise<Record<string, unknown>[]> => {
  if (!query.trim()) return []

  try {
    const response = await fetch(url)
    const data: Record<string, unknown>[] = await response.json()

    return data.filter((item) =>
      fields.some((field) =>
        item[field]?.toString().toLowerCase().includes(query.toLowerCase())
      )
    )
  } catch (error) {
    console.error('Error obteniendo datos:', error)
    return []
  }
}

const useSearchBar = (config: SearchConfig) => {
  const [results, setResults] = useState<Record<string, unknown>[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query: string) => {
    setLoading(true)
    const data = await fetchData(config.url, query, config.fields)
    setResults(data)
    setLoading(false)
  }

  return { results, loading, handleSearch }
}

export default useSearchBar
