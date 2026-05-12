## Guia de uso de SearchBar

`SearchBar` es un componente controlado y pequeno para flujos de busqueda. Renderiza un input y un boton de busqueda, y deja el comportamiento real de la busqueda en el componente padre.

### Importacion

```tsx
import { SearchBar } from "lib-components-react";
```

### API del componente

### Props

- `query`: valor actual del input.
- `placeholder`: texto opcional de ayuda dentro del input.
- `buttonText`: texto opcional del boton de busqueda.
- `onQueryChange`: se ejecuta cada vez que cambia el valor del input.
- `onSearch`: se ejecuta cuando el usuario hace click en el boton o presiona `Enter`.

### Uso con datos remotos

El componente no hace `fetch` por si solo. Un patron comun es mantener la consulta, el estado de la peticion y los resultados en el componente padre.

```tsx
// Ejemplo de uso:

import React, { useState } from "react";
import { SearchBar } from "lib-components-react";

type SearchResult = {
  id: number;
  title: string;
  description: string;
};

type ProductApiItem = {
  id: number;
  title: string;
  description: string;
};

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch() {
    const normalizedQuery = query.trim().toLowerCase();

    setError(null);

    if (!normalizedQuery) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("La API no respondio correctamente.");
      }

      const products: ProductApiItem[] = await response.json();

      const mappedResults = products
        .filter((item) =>
          [item.title, item.description].some((field) =>
            field.toLowerCase().includes(normalizedQuery),
          ),
        )
        .map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
        }));

      setResults(mappedResults);
    } catch (requestError) {
      setResults([]);
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Ocurrio un error inesperado.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar
        query={query}
        placeholder="Buscar producto"
        buttonText={loading ? "Buscando..." : "Buscar"}
        onQueryChange={setQuery}
        onSearch={() => {
          void handleSearch();
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
  );
}
```
