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










# Componente Table2 - especificaciones tecnicas

El componente `Table2` es un componente reutilizable para mostrar tablas en React.  
Toda la información se recibe de forma dinámica por medio de `props`, por lo que el componente no tiene datos quemados internamente.

Este componente soporta tres variantes:

| Variante | Descripción |
|---|---|
| `progress` | Tabla dinámica con cualquier cantidad de columnas y soporte para barra de progreso. |
| `simple` | Tabla simple de dos columnas, útil para mostrar características y valores. |
| `specifications` | Tabla de especificaciones dividida en secciones, con ícono opcional por sección. |

---

## Importación

Para usar el componente en `App.tsx`, se debe importar de la siguiente manera:

```tsx
import { Table2 } from 'lib'
```

Ejemplo básico:

```tsx
import { Table2 } from 'lib'

function App() {
  return (
    <div>
      <Table2
        variant="simple"
        title="Especificaciones Técnicas"
        rows={[
          {
            label: 'Gráficos',
            value: 'RTX 4070 8GB GDDR6',
          },
          {
            label: 'Batería',
            value: '99.9 Wh (12 horas)',
          },
        ]}
      />
    </div>
  )
}

export default App
```

---

# Variante `progress`

## Props de la variante `progress`

| Prop | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `variant` | `"progress"` | Sí | Indica que se usará la tabla dinámica con columnas configurables. |
| `title` | `string` | No | Título que se muestra arriba de la tabla. |
| `columns` | `ProgressTableColumn[]` | Sí | Arreglo que define las columnas de la tabla. |
| `rows` | `ProgressTableRow[]` | Sí | Arreglo que contiene la información de cada fila. |
| `rowKey` | `string` | No | Nombre de la propiedad que se usará como identificador único de cada fila. |

---

## Formato de `columns`


Cada columna recibe las siguientes propiedades:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `header` | `string` | Texto que se muestra en el encabezado de la columna. |
| `accessor` | `string` | Nombre de la propiedad que se buscará en cada fila. |
| `type` | `"text"` o `"progress"` | Define cómo se muestra el contenido. Si se coloca `"progress"`, se dibuja una barra de progreso. |

---

## Ejemplo de `progress` 

```tsx
import { Table2 } from 'lib'

function App() {
  return (
    <div>
      <Table2
        variant="progress"
        title="Avance general"
        columns={[
          {
            header: 'Actividad',
            accessor: 'actividad',
          },
          {
            header: 'Avance',
            accessor: 'avance',
            type: 'progress',
          },
        ]}
        rows={[
          {
            id: 'frontend',
            actividad: 'Frontend',
            avance: 75,
          },
          {
            id: 'backend',
            actividad: 'Backend',
            avance: 50,
          },
          {
            id: 'documentacion',
            actividad: 'Documentación',
            avance: 90,
          },
        ]}
      />
    </div>
  )
}

export default App
```

---

# Variante `simple`

Esta variante se usa enviando:

```tsx
variant="simple"
```

## Props de la variante `simple`

| Prop | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `variant` | `"simple"` | Sí | Indica que se usará la tabla simple. |
| `title` | `string` | No | Título que se muestra arriba de la tabla. |
| `rows` | `SimpleTableRow[]` | Sí | Arreglo de filas con `label` y `value`. |

---


Cada fila recibe las siguientes propiedades:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Texto que se muestra en la columna izquierda. |
| `value` | `string` | Texto que se muestra en la columna derecha. |

---

## Ejemplo de uso en `App.tsx` - Variante `simple`

```tsx
import { Table2 } from 'lib'

function App() {
  return (
    <div>
      <Table2
        variant="simple"
        title="Especificaciones Técnicas"
        rows={[
          {
            label: 'Gráficos',
            value: 'RTX 4070 8GB GDDR6',
          },
          {
            label: 'Batería',
            value: '99.9 Wh (12 horas)',
          },
          {
            label: 'Peso',
            value: '1.85 kg',
          },
          {
            label: 'S.O.',
            value: 'Windows 11 Pro',
          },
        ]}
      />
    </div>
  )
}

export default App
```

---

# Variante `specifications`

Esta variante se usa enviando:

```tsx
variant="specifications"
```

---

## Props de la variante `specifications`

| Prop | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `variant` | `"specifications"` | Sí | Indica que se usará la tabla de especificaciones por secciones. |
| `title` | `string` | No | Título principal que se muestra arriba de todas las secciones. |
| `sections` | `SpecificationSection[]` | Sí | Arreglo de secciones que se mostrarán en la tabla. |

---

## Formato de `sections`

```tsx
sections={[
  {
    title: 'Rendimiento',
    icon: <svg>...</svg>,
    rows: [
      {
        label: 'Procesador',
        value: 'Intel Core i9-14900HX',
      },
      {
        label: 'Memoria RAM',
        value: '64 GB DDR5',
      },
    ],
  },
]}
```

Cada sección recibe:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Título de la sección. |
| `icon` | `React.ReactNode` | Ícono opcional. Puede ser un SVG, un componente o cualquier elemento JSX. |
| `rows` | `SpecificationRow[]` | Arreglo de filas que pertenecen a la sección. |

Cada fila dentro de `rows` recibe:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Nombre de la característica. |
| `value` | `string` | Valor de la característica. |

---

## Ejemplo de uso en `App.tsx` - Variante `specifications`

```tsx
import { Table2 } from 'lib'

function App() {
  return (
    <div>
      <Table2
        variant="specifications"
        title="Especificaciones Técnicas"
        sections={[
          {
            title: 'Rendimiento',
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="14" rx="1" />
                <path d="M8 21h8" />
                <path d="M12 18v3" />
              </svg>
            ),
            rows: [
              {
                label: 'Procesador',
                value: 'Intel Core i9-14900HX (24 núcleos, 5.8 GHz Turbo)',
              },
              {
                label: 'Memoria RAM',
                value: '64 GB DDR5-5600MHz Dual Channel',
              },
              {
                label: 'Gráficos',
                value: 'NVIDIA GeForce RTX 4090 (16GB GDDR6X, 175W TGP)',
              },
              {
                label: 'Almacenamiento',
                value: '2 TB NVMe PCIe Gen4 M.2 SSD',
              },
            ],
          },
          {
            title: 'Pantalla y Chasis',
            icon: (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="5" width="16" height="12" rx="1" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
              </svg>
            ),
            rows: [
              {
                label: 'Panel',
                value: '16" 4K OLED, 100% DCI-P3, HDR1000, 120Hz',
              },
              {
                label: 'Material',
                value: 'Aluminio aeroespacial fresado CNC',
              },
              {
                label: 'Peso',
                value: '2.1 kg (4.6 lbs)',
              },
              {
                label: 'Batería',
                value: '99.9 Wh (Máximo legal para vuelos)',
              },
            ],
          },
        ]}
      />
    </div>
  )
}

export default App
```