## Guia de uso de SearchBar

`SearchBar` es un componente controlado y pequeno para flujos de busqueda. Renderiza un input y un boton de busqueda, y deja el comportamiento real de la busqueda en el componente padre.

Esto lo hace util cuando la interfaz para escribir una consulta debe ser reutilizable, mientras que la obtencion de datos, el filtrado, los estados de carga, los errores y el render de resultados permanecen fuera del componente.

### Importacion

```tsx
import { SearchBar } from 'lib-components-react'
```

### API del componente

```tsx
type SearchBarProps = {
	query: string
	placeholder?: string
	buttonText?: string
	onQueryChange: (value: string) => void
	onSearch: () => void
}
```

### Props

- `query`: valor actual del input.
- `placeholder`: texto opcional de ayuda dentro del input.
- `buttonText`: texto opcional del boton de busqueda.
- `onQueryChange`: se ejecuta cada vez que cambia el valor del input.
- `onSearch`: se ejecuta cuando el usuario hace click en el boton o presiona `Enter`.

### Uso basico

```tsx
import React, { useState } from 'react'
import { SearchBar } from 'lib-components-react'

export default function Example() {
	const [query, setQuery] = useState('')

	function handleSearch() {
		console.log('Buscar:', query)
	}

	return (
		<SearchBar
			query={query}
			placeholder="Buscar..."
			buttonText="Buscar"
			onQueryChange={setQuery}
			onSearch={handleSearch}
		/>
	)
}
```

### Uso con datos remotos

El componente no hace `fetch` por si solo. Un patron comun es mantener la consulta, el estado de la peticion y los resultados en el componente padre.

```tsx
import React, { useState } from 'react'
import { SearchBar } from 'lib-components-react'

type SearchResult = {
	id: number
	title: string
	description: string
}

type ProductApiItem = {
	id: number
	title: string
	description: string
}

export default function ProductSearch() {
	const [query, setQuery] = useState('')
	const [results, setResults] = useState<SearchResult[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	async function handleSearch() {
		const normalizedQuery = query.trim().toLowerCase()

		setError(null)

		if (!normalizedQuery) {
			setResults([])
			return
		}

		setLoading(true)

		try {
			const response = await fetch('https://fakestoreapi.com/products')

			if (!response.ok) {
				throw new Error('La API no respondio correctamente.')
			}

			const products: ProductApiItem[] = await response.json()

			const mappedResults = products
				.filter((item) =>
					[item.title, item.description].some((field) =>
						field.toLowerCase().includes(normalizedQuery)
					)
				)
				.map((item) => ({
					id: item.id,
					title: item.title,
					description: item.description,
				}))

			setResults(mappedResults)
		} catch (requestError) {
			setResults([])
			setError(requestError instanceof Error ? requestError.message : 'Ocurrio un error inesperado.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<SearchBar
				query={query}
				placeholder="Buscar producto"
				buttonText={loading ? 'Buscando...' : 'Buscar'}
				onQueryChange={setQuery}
				onSearch={() => {
					void handleSearch()
				}}
			/>

			{error && <p>{error}</p>}

			{results.length > 0 && (
				<ul>
					{results.map((item) => (
						<li key={item.id}>
							<strong>{item.title}</strong>
							<div>{item.description}</div>
						</li>
					))}
				</ul>
			)}
		</>
	)
}
```

### Como fluye la busqueda

El flujo normal de uso se puede entender asi:

1. El usuario escribe, por ejemplo `Men`.
2. `SearchBar` detecta ese cambio en el input.
3. `SearchBar` llama `onQueryChange('Men')`.
4. El padre guarda ese valor en su estado, por ejemplo en `query`.

Hasta ese punto no necesariamente ocurre una busqueda real. En muchos casos, solo se esta actualizando el texto escrito por el usuario.

Despues ocurre la accion de buscar:

1. El usuario presiona el boton `Buscar` o presiona `Enter`.
2. `SearchBar` llama `onSearch()`.
3. El padre, que ya conoce el valor actual de `query`, ejecuta la consulta.
4. La consulta devuelve resultados.
5. El padre guarda esos resultados.
6. El padre decide como renderizarlos.

Si el padre renderiza esos resultados justo debajo del `SearchBar`, visualmente puede parecer que el dropdown forma parte del componente, aunque tecnicamente no sea asi.

Eso es una composicion visual: el `SearchBar` sigue siendo solo la interfaz de entrada y accion, mientras que el padre controla los datos y la forma en que se presentan los resultados.

### Notas de diseno

`SearchBar` es intencionalmente minimo.

- No hace `fetch` de datos.
- No guarda resultados.
- No renderiza un dropdown ni una lista de resultados.
- No contiene reglas de busqueda especificas de una aplicacion.

