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



3. Tabla

Importar librería:

import { Table } from 'lib'

Se necesita crear un objeto
como por ejemplo:
    {
      id: 1,
      name: 'RTX 4090 OC Edition',
      category: 'GPU',
      sku: 'RTX4090OC',
      stock: 12,
      price: 1849,
      status: 'Activo'
    }
