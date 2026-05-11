# lib-components-react

Librería mínima de componentes React con compatibilidad para formularios (react-hook-form) y estilos Tailwind.

Quick start

1. Instala dependencias

```bash
npm install
```

2. Corre el ejemplo

```bash
npm run dev
```

Diseño y compatibilidad

- Los componentes usan Tailwind por defecto. Pueden adaptarse a las clases de shadcn (componentes estilados con utilidades de Tailwind) cambiando las clases en `src/ui`.
- Los inputs usan forwardRef para integrarse con `react-hook-form`.

# Lib Typography
1. instalar depencias geist sans
npm install geist

## SearchBar Uso

Implementacion dentro de `App.tsx`:

```tsx
import React, { useState } from 'react'
import { SearchBar } from 'lib-components-react'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'Typography' | 'SearchBar'

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select', 'Typography', 'SearchBar']

const searchConfig = {
	url: 'https://fakestoreapi.com/products',
	fields: ['title', 'category', 'description'],
	displayField: 'title',
	placeholder: 'Buscar en la tienda...',
	buttonText: 'Search'
}

export default function App() {
	const [selected, setSelected] = useState<ComponentKey>('Button')

	function renderPanel() {
		switch (selected) {
			case 'SearchBar':
				return (
					<div>
						<h2>SearchBar</h2>
						<div className="panel">
							<SearchBar config={searchConfig} />
						</div>
					</div>
				)

			default:
				return null
		}
	}

	return <main className="demo-content">{renderPanel()}</main>
}
```

Notas:

- `searchConfig` se define en `App.tsx`, que es donde se implementa el componente.
- `url`: endpoint que devuelve la lista a consultar.
- `fields`: campos donde se hara la busqueda.
- `displayField`: campo que se mostrara en cada resultado.
- `placeholder`: texto del input.
- `buttonText`: texto del boton.

Los estilos del componente se encuentran en `src/styles.css`.

