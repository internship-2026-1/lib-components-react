import React, { useState } from 'react'
import { Input, Button, FormField, Textarea, Select, Text, SearchBar } from 'lib'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'Typography' | 'SearchBar'

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select', 'Typography', 'SearchBar']

// SearchBar: tipo de dato que usamos en la UI para guardar y renderizar resultados.
type SearchResult = {
  id: number
  title: string
  description: string
}

// SearchBar: tipo de dato que esperamos recibir desde la API.
type ProductApiItem = {
  id: number
  title: string
  description: string
}

export default function App() {
  const [selected, setSelected] = useState<ComponentKey>('Button')
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  // SearchBar: estado para la busqueda y sus resultados.
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [searchLoading, setSearchLoading] = useState(false)
  const [searchError, setSearchError] = useState<string | null>(null)

  // SearchBar: realiza la consulta y actualiza resultados o errores.
  async function handleDemoSearch() {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    setSearchError(null)

    if (!normalizedQuery) {
      setSearchResults([])
      return
    }

    try {
      setSearchLoading(true)

      const response = await fetch('https://fakestoreapi.com/products')

      if (!response.ok) {
        throw new Error('La API no respondio correctamente.')
      }

      const products: ProductApiItem[] = await response.json()

      setSearchResults(
        products
          .filter((item) => {
            return [item.title, item.description].some((field) =>
              field.toLowerCase().includes(normalizedQuery)
            )
          })
          .map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
          }))
      )
    } catch (searchRequestError) {
      setSearchResults([])
      setSearchError(
        searchRequestError instanceof Error
          ? searchRequestError.message
          : 'Ocurrio un error inesperado.'
      )
    } finally {
      setSearchLoading(false)
    }
  }

  function renderPanel() {
    switch (selected) {
      case 'Button':
        return (
          <div>
            <h2>Button</h2>
            <div className="state-row">
              <div className="panel">
                <Button onClick={() => alert('clicked')}>Default</Button>
              </div>
              <div className="panel">
                <Button disabled>Disabled</Button>
              </div>
              <div className="panel">
                <Button className="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        )

      case 'Input':
        return (
          <div>
            <h2>Input</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="Name">
                  <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Input disabled placeholder="disabled" />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Error" error={error}>
                  <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
                </FormField>
                <div style={{marginTop:8}}>
                  <Button onClick={() => setError(error ? null : 'This field is required')}>Toggle Error</Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Textarea':
        return (
          <div>
            <h2>Textarea</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="About">
                  <Textarea />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Textarea disabled />
                </FormField>
              </div>
            </div>
          </div>
        )

      case 'Select':
        return (
          <div>
            <h2>Select</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="Role">
                  <Select>
                    <option value="">Select a role</option>
                    <option value="dev">Developer</option>
                    <option value="pm">Product Manager</option>
                  </Select>
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Select disabled>
                    <option>Disabled</option>
                  </Select>
                </FormField>
              </div>
            </div>
          </div>
        )

      case 'Typography':
        return(
          <div>
            <h2>Typography</h2>
            <div className="typography-column">
              <div className="panel">
                <Text variant='DisplayLarge'>
                  Ingenieria de precision
                </Text>
              </div>

              <div className='panel'>
                <Text variant='HeadlineLarge'>
                  Rendimiento de limites
                </Text>
              </div>

              <div className='panel'>
                <Text variant='HeadlineMedium'>
                  Especificaciones tecnicas
                </Text>
              </div>
              <div className='panel'>
                <Text variant='BodyLarge'>
                  Diseñado para entusiastas y profesionales que valoran la calidad de construcción y los detalles técnicos.
                </Text>
              </div>
              <div className='panel'>
                <Text variant='LabelLarge'>
                  CONFIGURAR AHORA
                </Text>
              </div>
              <div className='panel'>
                <Text variant='code'>
                  npm install @techspec/core
                </Text>
              </div>
            </div>
          </div>
        )
      case 'SearchBar':
        // SearchBar: ejemplo de uso del componente dentro del panel.
        return (
          <div>
            <h2>SearchBar</h2>
            <div className="panel">
              <SearchBar
                query={searchQuery}
                placeholder="Buscar producto en Fake Store API"
                buttonText={searchLoading ? 'Buscando...' : 'Buscar'}
                onQueryChange={setSearchQuery}
                onSearch={() => {
                  void handleDemoSearch()
                }}
              />
              {searchResults.length === 0 ? (
                <p className="lc-label">No hay resultados todavia.</p>
              ) : (
                <ul className="results-list">
                  {searchResults.map((item) => (
                    <li key={item.id}>
                      <strong>{item.title}</strong>
                      <div>{item.description}</div>
                    </li>
                  ))}
                </ul>
              )}
              {searchError && <p className="lc-error">{searchError}</p>}
            </div>
          </div>
        )

      default:

        return null
    }
  }

  return (
    <div className="demo-root">
      <aside className="demo-sidebar">
        <h3>Components</h3>
        {components.map((c) => (
          <div
            key={c}
            className={`component-item ${selected === c ? 'active' : ''}`}
            onClick={() => setSelected(c)}
          >
            {c}
          </div>
        ))}
      </aside>

      <main className="demo-content">
        {renderPanel()}
      </main>
    </div>
  )
}
