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



# Lib - Table

Asegúrate de tener el componente `Table.tsx` y sus estilos en tu carpeta de componentes.

---

# Importar el componente

En el archivo donde quieras usarlo:

```tsx
import { Table } from './components/Table'
import './components/styles.css'
Crear los datos

Define un arreglo con la información que se mostrará en la tabla:

const data = [
  {
    id: 1,
    name: 'RTX 4090',
    category: 'GPU',
    stock: 12,
    price: 1849,
    status: 'Activo',
    isActive: true
  }
]
Crear las columnas

Las columnas definen qué propiedades mostrar y cómo renderizarlas:

const columns = [
  {
    key: 'name',
    header: 'PRODUCTO'
  },
  {
    key: 'price',
    header: 'PRECIO',
    render: (row) => `Q${row.price}`
  }
]
Renderizar la tabla
<Table
  data={data}
  columns={columns}
  itemsPerPage={5}
/>
Props disponibles
Prop	Descripción
data	Datos que se mostrarán
columns	Configuración de columnas
keyField	Campo único opcional
emptyMessage	Mensaje cuando no hay datos
itemsPerPage	Cantidad de filas por página
Render personalizado

Puedes personalizar cualquier columna usando render:

{
  key: 'status',
  header: 'ESTADO',
  render: (row) => (
    <span>● {row.status}</span>
  )
}
Botones de acciones
{
  key: 'actions',
  header: 'ACCIONES',
  render: (row) => {
    const isDisabled = !row.isActive

    return (
      <button disabled={isDisabled}>
        Editar
      </button>
    )
  }
}