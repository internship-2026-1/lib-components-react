# lib-components-react

Librería de componentes React con CSS puro, tipografía Manrope y sistema de diseño propio.

## Quick start

1. Instala dependencias

```bash
npm install
npm run dev
```

## Diseño y compatibilidad

# Sumador Component

Componente reutilizable para incrementar o decrementar valores numéricos dentro de un rango definido.

## Características

- Incrementa y decrementa valores.
- Permite definir un valor mínimo y máximo.
- Deshabilita automáticamente los botones cuando se alcanza el límite.

---

## Props

| Prop       | Tipo                      | Descripción                    |
| ---------- | ------------------------- | ------------------------------ |
| `value`    | `number`                  | Valor actual del contador      |
| `onChange` | `(value: number) => void` | Función que actualiza el valor |
| `min`      | `number`                  | Valor mínimo permitido         |
| `max`      | `number`                  | Valor máximo permitido         |

---

## Uso

```tsx
import { Sumador } from "lib";
import { useState } from "react";

export default function Example() {
  const [cantidad, setCantidad] = useState(1);

  return <Sumador value={cantidad} onChange={setCantidad} min={1} max={10} />;
}
```

## Comportamiento

- El botón `-` se deshabilita cuando el valor llega al mínimo.
- El botón `+` se deshabilita cuando el valor llega al máximo.
- El componente mantiene el valor dentro del rango permitido.

---

## Estilos

El componente utiliza las clases:

- `sumador`
- `sumador-btn`
- `sumador-value`

Definidas en:

```tsx
src / styles.css;
```

## Importación

- Los componentes usan Tailwind por defecto. Pueden adaptarse a las clases de shadcn (componentes
  estilados con utilidades de Tailwind) cambiando las clases en `src/ui`.
- Los inputs usan forwardRef para integrarse con `react-hook-form`.

## Características Principales

- **Alto Uniforme:** Consistencia visual garantizada con un `height` fijo de `40px` en todas las variantes.
- **Sistema de Iconos Local:** Librería interna de SVGs optimizados que heredan el color del texto
- **Diseño Dinámico:** Soporte integrado para múltiples variantes y tamaños mediante props.
- **Ancho Inteligente:** Implementación de `fit-content` para un ajuste perfecto al contenido (texto + icono).
- **Polimorfismo:** Basado en `React.forwardRef`, hereda todos los atributos y eventos nativos de HTML (`onClick`, `type`, `disabled`, etc.).

---

## Guía de Uso

### Importación básica

````tsx

    <Button
      variant="primary"
      iconName="Email"
      onClick={() => alert('Correo enviado')}
    >
      Enviar Mensaje
    </Button>

```jsx
import { Card, CardGrid, PromoCard, InfoCard, Button, Text } from 'lib-components-react'
import 'lib-components-react/styles.css'

````

---

## API del Componente (Props)

| Propiedad  | Tipo                                     | Por defecto | Descripción                                                    |
| :--------- | :--------------------------------------- | :---------- | :------------------------------------------------------------- |
| `variant`  | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Define el esquema de color y bordes.                           |
| `size`     | `'sm' \| 'md' \| 'lg' \| 'full'`         | `'md'`      | Ajusta el padding y la fuente. `full` ocupa el 100% del ancho. |
| `iconName` | `keyof typeof Icons`                     | `undefined` | Nombre del icono a renderizar (ver lista abajo).               |
| `...props` | `React.ButtonHTMLAttributes`             | -           | Soporta cualquier atributo estándar de un botón HTML.          |

---

## Variantes de Diseño

1.  **Primary:** Fondo azul intenso con texto blanco. Ideal para acciones principales.
2.  **Secondary:** Fondo azul tenue, borde gris y texto azul. Para acciones secundarias.
3.  **Tertiary:** Sin fondo ni bordes. Estilo limpio para acciones de baja prioridad.

---

## Librería de Iconos Integrada

Para usar un icono, pasa el nombre correspondiente a la prop `iconName`:

- `Bolt` (Rayo)
- `NewItem` (Nuevo)
- `Scan` (Escanear)
- `Invoice` (Facturar)
- `Transfer` (Transferir)
- `Cart` (Carrito)
- `Email` (Correo)
- `Settings` (Configuración)
- `Arrow` (Flecha)
- `Lock` (Candado)

---

## Mantenimiento Técnico

Los estilos están implementados como **objetos de JavaScript (Inline Styles)** dentro del archivo `Button.tsx`. Esto evita la colisión de clases CSS y facilita la portabilidad del componente.

Para agregar nuevos iconos:

1. Localiza el objeto `Icons` en `Button.tsx`.
2. Añade el código SVG asegurándote de usar `stroke="currentColor"` para la herencia de color.

## Componentes de Cards

### Card

Tarjeta de producto o contenido con imagen, badge, tags y footer.

```jsx
<Card
  image="https://example.com/product.jpg"
  imageAlt="Producto"
  title="Horizon Alpha X"
  description="Workstation de alto rendimiento para renderizado 3D."
  badge="NUEVO"
  tags={["64GB RAM", "RTX 4090"]}
  footer={<Button>DETALLES</Button>}
/>
```

| Prop          | Tipo        | Descripción                            |
| ------------- | ----------- | -------------------------------------- |
| `image`       | `string`    | URL de la imagen                       |
| `imageAlt`    | `string`    | Texto alternativo                      |
| `title`       | `ReactNode` | Título de la tarjeta                   |
| `description` | `ReactNode` | Descripción                            |
| `badge`       | `string`    | Etiqueta sobre la imagen (ej. "NUEVO") |
| `tags`        | `string[]`  | Chips informativos bajo la descripción |
| `footer`      | `ReactNode` | Área de acciones (botones)             |

---

### CardGrid

Contenedor responsivo para múltiples `Card`.

```jsx
<CardGrid columns={3} gap={20}>
  <Card title="Item 1" />
  <Card title="Item 2" />
  <Card title="Item 3" />
</CardGrid>
```

Comportamiento responsivo automático: 3 columnas → 2 en tablet → 1 en móvil.

| Prop      | Tipo          | Default |
| --------- | ------------- | ------- |
| `columns` | `number`      | `3`     |
| `gap`     | `number` (px) | `20`    |

---

### PromoCard

Banner promocional de fondo completo con ícono decorativo.

```jsx
<PromoCard
  title="Promoción"
  description="Descuento del 15% en componentes seleccionados este mes."
  backgroundColor="#0056C3"
/>
```

| Prop              | Tipo        | Default   |
| ----------------- | ----------- | --------- |
| `title`           | `ReactNode` | —         |
| `description`     | `ReactNode` | —         |
| `backgroundColor` | `string`    | `#0056C3` |

---

### InfoCard

Fila compacta con ícono, título y descripción. Fondo superficie gris.

```jsx
<InfoCard
  icon={<svg>...</svg>}
  title="Soporte Técnico 24/7"
  description="Asistencia experta para tu configuración."
/>
```

| Prop          | Tipo        | Descripción                    |
| ------------- | ----------- | ------------------------------ |
| `icon`        | `ReactNode` | Ícono (SVG, emoji, componente) |
| `title`       | `ReactNode` | Título                         |
| `description` | `ReactNode` | Descripción                    |

---

## Layout de ejemplo (Figma)

```jsx
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
  <Card
    image="..."
    title="Horizon Alpha X"
    description="Workstation de alto rendimiento."
    badge="NUEVO"
    tags={["64GB RAM", "RTX 4090"]}
    footer={<Button>DETALLES</Button>}
  />
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <PromoCard
      title="Promoción"
      description="Descuento del 15% en componentes seleccionados este mes."
    />
    <InfoCard
      icon={<svg>...</svg>}
      title="Soporte Técnico 24/7"
      description="Asistencia experta para tu configuración."
    />
  </div>
</div>
```

---

## Personalización CSS

Los componentes usan variables CSS globales:

```css
:root {
  --bg: #ffffff;
  --text: #191c1e;
  --muted: #565e74;
  --accent: #0056c3;
  --surface: #eceef0;
  --danger: #ba1a1a;
  --on-surface: #191c1e;
}
```

Sobrescríbelas en tu propio CSS para cambiar el tema globalmente.

---

> Para documentación detallada con más ejemplos ver `CARDS_GUIDE.md`.

---

## Componente Text (Typography)

Componente de tipografía con variantes predefinidas usando la fuente Geist.

```jsx
import { Text } from 'lib-components-react'

<Text variant="DisplayLarge">Ingeniería de Precisión</Text>
<Text variant="HeadlineLarge">Rendimiento sin límites</Text>
<Text variant="HeadlineMedium">Especificaciones Técnicas</Text>
<Text variant="BodyLarge">Descripción del producto.</Text>
<Text variant="LabelLarge">CONFIGURAR AHORA</Text>
<Text variant="code">npm install @techspec/core</Text>
```

Instalar fuente Geist: `npm install geist`

# Lib - RadioButton

Asegúrate de tener el código del componente (RadioButton.tsx) y sus estilos (styles.css) en tu carpeta de
componentes (por ejemplo, en src/components/).

1. Importar el componente<br>
   En el archivo donde quieras usarlo (por ejemplo, en un formulario o una página), impórtalo así:<br>

```
import { RadioButton } from './components/RadioButton';<br>
import './components/styles.css'; // Asegúrate de cargar los estilos.
```

2. Implementar el estado (State)<br>
   Para que React sepa cuál está seleccionado, necesitas un estado que guarde el valor actual:

```
const [opcion, setOpcion] = useState('');


const manejarCambio = (e: React.ChangeEvent< HTMLInputElement>) => {
  setOpcion(e.target.value);
};
```

3. Renderizar los RadioButtons<br>
   Úsalos pasando siempre el mismo name para que actúen como grupo, y compara el value con tu estado para el
   prop checked:

```
< div><br>
  < RadioButton<br>
    name="grupo1"  // El nombre vincula los botones como un solo equipo <br>
    value="A"  // El valor único de este botón<br>
    checked={opcion === 'A'}  // Condición para que se pinte como seleccionado<br>
    onChange={manejarCambio}  // Función que se activa al hacer clic<br>
  />

 < div><br>
    < RadioButton
      name="grupo1"
      value="B"  <br>
      checked={opcion === 'B'}
      onChange={manejarCambio}
  />
```

### Resumen de lo que necesitas pasarle:

- name: El mismo para todos los que van juntos.
- value: Lo que vale cada opción (ej. "rojo", "azul").
- checked: Una condición booleana (true/false).
- onChange: La función que actualiza tu estado al hacer click.

# Componente Table2 - especificaciones tecnicas

El componente `Table2` es un componente reutilizable para mostrar tablas en React.  
Toda la información se recibe de forma dinámica por medio de `props`, por lo que el componente no tiene datos quemados internamente.

Este componente soporta tres variantes:

| Variante         | Descripción                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| `progress`       | Tabla dinámica con cualquier cantidad de columnas y soporte para barra de progreso. |
| `simple`         | Tabla simple de dos columnas, útil para mostrar características y valores.          |
| `specifications` | Tabla de especificaciones dividida en secciones, con ícono opcional por sección.    |

---

## Importación

Para usar el componente en `App.tsx`, se debe importar de la siguiente manera:

```tsx
import { Table2 } from "lib";
```

Ejemplo básico:

```tsx
import { Table2 } from "lib";

function App() {
  return (
    <div>
      <Table2
        variant="simple"
        title="Especificaciones Técnicas"
        rows={[
          {
            label: "Gráficos",
            value: "RTX 4070 8GB GDDR6",
          },
          {
            label: "Batería",
            value: "99.9 Wh (12 horas)",
          },
        ]}
      />
    </div>
  );
}

export default App;
```

---

# Variante `progress`

## Props de la variante `progress`

| Prop      | Tipo                    | Obligatoria | Descripción                                                                |
| --------- | ----------------------- | ----------- | -------------------------------------------------------------------------- |
| `variant` | `"progress"`            | Sí          | Indica que se usará la tabla dinámica con columnas configurables.          |
| `title`   | `string`                | No          | Título que se muestra arriba de la tabla.                                  |
| `columns` | `ProgressTableColumn[]` | Sí          | Arreglo que define las columnas de la tabla.                               |
| `rows`    | `ProgressTableRow[]`    | Sí          | Arreglo que contiene la información de cada fila.                          |
| `rowKey`  | `string`                | No          | Nombre de la propiedad que se usará como identificador único de cada fila. |

---

## Formato de `columns`

Cada columna recibe las siguientes propiedades:

| Propiedad  | Tipo                    | Descripción                                                                                      |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------ |
| `header`   | `string`                | Texto que se muestra en el encabezado de la columna.                                             |
| `accessor` | `string`                | Nombre de la propiedad que se buscará en cada fila.                                              |
| `type`     | `"text"` o `"progress"` | Define cómo se muestra el contenido. Si se coloca `"progress"`, se dibuja una barra de progreso. |

---

## Ejemplo de `progress`

```tsx
import { Table2 } from "lib";

function App() {
  return (
    <div>
      <Table2
        variant="progress"
        title="Avance general"
        columns={[
          {
            header: "Actividad",
            accessor: "actividad",
          },
          {
            header: "Avance",
            accessor: "avance",
            type: "progress",
          },
        ]}
        rows={[
          {
            id: "frontend",
            actividad: "Frontend",
            avance: 75,
          },
          {
            id: "backend",
            actividad: "Backend",
            avance: 50,
          },
          {
            id: "documentacion",
            actividad: "Documentación",
            avance: 90,
          },
        ]}
      />
    </div>
  );
}

export default App;
```

---

# Variante `simple`

Esta variante se usa enviando:

```tsx
variant = "simple";
```

## Props de la variante `simple`

| Prop      | Tipo               | Obligatoria | Descripción                               |
| --------- | ------------------ | ----------- | ----------------------------------------- |
| `variant` | `"simple"`         | Sí          | Indica que se usará la tabla simple.      |
| `title`   | `string`           | No          | Título que se muestra arriba de la tabla. |
| `rows`    | `SimpleTableRow[]` | Sí          | Arreglo de filas con `label` y `value`.   |

---

Cada fila recibe las siguientes propiedades:

| Propiedad | Tipo     | Descripción                                   |
| --------- | -------- | --------------------------------------------- |
| `label`   | `string` | Texto que se muestra en la columna izquierda. |
| `value`   | `string` | Texto que se muestra en la columna derecha.   |

---

## Ejemplo de uso en `App.tsx` - Variante `simple`

```tsx
import { Table2 } from "lib";

function App() {
  return (
    <div>
      <Table2
        variant="simple"
        title="Especificaciones Técnicas"
        rows={[
          {
            label: "Gráficos",
            value: "RTX 4070 8GB GDDR6",
          },
          {
            label: "Batería",
            value: "99.9 Wh (12 horas)",
          },
          {
            label: "Peso",
            value: "1.85 kg",
          },
          {
            label: "S.O.",
            value: "Windows 11 Pro",
          },
        ]}
      />
    </div>
  );
}

export default App;
```

---

# Variante `specifications`

Esta variante se usa enviando:

```tsx
variant = "specifications";
```

---

## Props de la variante `specifications`

| Prop       | Tipo                     | Obligatoria | Descripción                                                     |
| ---------- | ------------------------ | ----------- | --------------------------------------------------------------- |
| `variant`  | `"specifications"`       | Sí          | Indica que se usará la tabla de especificaciones por secciones. |
| `title`    | `string`                 | No          | Título principal que se muestra arriba de todas las secciones.  |
| `sections` | `SpecificationSection[]` | Sí          | Arreglo de secciones que se mostrarán en la tabla.              |

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

| Propiedad | Tipo                 | Descripción                                                               |
| --------- | -------------------- | ------------------------------------------------------------------------- |
| `title`   | `string`             | Título de la sección.                                                     |
| `icon`    | `React.ReactNode`    | Ícono opcional. Puede ser un SVG, un componente o cualquier elemento JSX. |
| `rows`    | `SpecificationRow[]` | Arreglo de filas que pertenecen a la sección.                             |

Cada fila dentro de `rows` recibe:

| Propiedad | Tipo     | Descripción                  |
| --------- | -------- | ---------------------------- |
| `label`   | `string` | Nombre de la característica. |
| `value`   | `string` | Valor de la característica.  |

---

## Ejemplo de uso en `App.tsx` - Variante `specifications`

```tsx
import { Table2 } from "lib";

function App() {
  return (
    <div>
      <Table2
        variant="specifications"
        title="Especificaciones Técnicas"
        sections={[
          {
            title: "Rendimiento",
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
                label: "Procesador",
                value: "Intel Core i9-14900HX (24 núcleos, 5.8 GHz Turbo)",
              },
              {
                label: "Memoria RAM",
                value: "64 GB DDR5-5600MHz Dual Channel",
              },
              {
                label: "Gráficos",
                value: "NVIDIA GeForce RTX 4090 (16GB GDDR6X, 175W TGP)",
              },
              {
                label: "Almacenamiento",
                value: "2 TB NVMe PCIe Gen4 M.2 SSD",
              },
            ],
          },
          {
            title: "Pantalla y Chasis",
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
                label: "Panel",
                value: '16" 4K OLED, 100% DCI-P3, HDR1000, 120Hz',
              },
              {
                label: "Material",
                value: "Aluminio aeroespacial fresado CNC",
              },
              {
                label: "Peso",
                value: "2.1 kg (4.6 lbs)",
              },
              {
                label: "Batería",
                value: "99.9 Wh (Máximo legal para vuelos)",
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
```

# Lib - Table

Asegúrate de tener el componente `Table.tsx` y sus estilos en tu carpeta de componentes.

---

# Importar el componente

En el archivo donde quieras usarlo:

````tsx
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



## Componentes principales de Input
### FormField
El contenedor encargado del diseño. Maneja la etiqueta, el espaciado y muestra el mensaje de error.

### Input
El componente de entrada de datos. Acá se agregan los callbacks personalizados.

### Propiedades de formField
| Prop | Tipo | Descripcion |
| :--- | :---: | :---: |
| label | string | El texto que aparece sobre el input |
| name | string | Identificador del campo |
| error | string\|null | Mensaje de error |
| children | ReactNode | Contenido que va dentro del componente |

### Propiedades de input
| Prop | Tipo | Descripcion |
| :--- | :---: | :---: |
| type | string | Define el tipo de entrada |
| changeValue | function | Callback personalizado para retornar valor |
| error | string\|null | Si tiene valor, el borde del input se pone rojo |
| disabled | boolean | Deshabilita el campo y cambia su estilo visual |
| ...props | Attributes | Acepta cualquier atributo de HTML (placeholder) |

### Tipos de type soportados
- text, email, password, tel, number

## Ejemplos de implementacion
### Input de Texto Básico con Callback
Permite capturar nombres o datos simples.

- Ejemplo para capturar nombre o texto
```bash
<div className="panel">
    <FormField label="Name" name="user-name">
        <Input
            name="user-name"
            placeholder="Enter your name"
            changeValue={handlerValue}
        />
    </FormField>
</div>
````

- Ejemplo de nombre utilizando campo de validación para capturar errores

```bash
<FormField label="Name" name="user-name" error={nameError}>
    <Input
        name="user-name"
        placeholder="Enter your name"
        error={nameError}
        changeValue={(v) => {
            setNameValue(v || '');
            setNameError(v?.trim() ? null : "Este campo es requerido");
            handlerValue(v);
        }}
    />
</FormField>
```

### Input Numérico o Teléfono

Permite capturar números de teléfono o tipos numericos (edad)

- Ejemplo para números de teléfono

```bash
<div className="panel">
    <FormField label="Phone number" name="user-phone-number">
        <Input
            name="user-phone-number"
            type="tel"
            placeholder="+502 0000-0000"
            changeValue={handlerValue}
        />
    </FormField>
</div>
```

- Ejemplo de número teléfonico utilizando campo de validación para capturar errores

```bash
<FormField label="Phone number" name="user-phone-number" error={phoneError}>
    <Input
        name="user-phone-number"
        type="tel"
        placeholder="+502 0000-0000"
        value={phoneValue}
        error={phoneError}
        changeValue={(v) => {
            setPhoneValue(v || '');
                if (!v) setPhoneError("Este campo es requerido");
                else if (v.length < 8) setPhoneError("Debe tener al menos 8 digitos");
                else if (!/^\+?[\d\s-]+$/.test(v)) setPhoneError("Formato no valido");
                else setPhoneError(null);
                handlerValue(v);
        }}
    />
</FormField>
```

### Ejemplo para edad

```bash
<div className="panel">
    <FormField label="Age" name="user-age">
        <Input
            name="user-age"
            type="number"
            placeholder="0"
            changeValue={handlerValue}
        />
    </FormField>
</div>
```

- Ejemplo de edad utilizando campo de validación para capturar errores

```bash
<FormField label="Age" name="user-age" error={ageError}>
    <Input
        name="user-age"
        type="number"
        placeholder="0"
        error={ageError}
        changeValue={(v) => {
            if (!v || v.trim() === "") {
                setAgeError("Este campo es requerido");
            } else if (Number(v) < 0) {
                setAgeError("La edad debe ser un número positivo");
            } else {
                setAgeError(null);
            }
            handlerValue(v);
        }}
    />
</FormField>
```

### Input para email

Permite capturar el email

- Ejemplo para email

```bash
<div className="panel">
    <FormField label="Email" name="user-email">
        <Input
            name="user-email"
            type="email"
            value={emailValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailValue(e.target.value)}
            placeholder="example@mail.com"
            changeValue={handlerValue}
        />
    </FormField>
</div>
```

- Ejemplo de email utilizando campo de validación para capturar errores

```bash
<FormField label="Email" name="user-email" error={emailError}>
    <Input
        name="user-email"
        type="email"
        value={emailValue}
        error={emailError}
        placeholder="example@mail.com"
        changeValue={(v) => {
            setEmailValue(v || '');
            if (!v || v.trim() === '') {
                setEmailError("Este campo es requerido");
            } else if (!v.includes('@')) {
                setEmailError("Email invalido");
            } else {
                setEmailError(null);
            }
            handlerValue(v);
        }}
    />
</FormField>
```

### Ejemplo de validación, se muestra error

Permite ver cambios en el contenido y estilo al tener un error y tratar de enviar un campo vacio utilizando botón.

- Ejemplo para error

```bash
<FormField label="Validation Example" name="error-input" error={error}>
    <Input
        name="user-name"
        error={error}
        placeholder="Press the button"
        changeValue={handlerValue}
    />
</FormField>
<div style={{marginTop:8}}>
    <Button onClick={() => setError(error ? null : 'Este campo es requerido')}>
        Toggle Error
    </Button>
</div>
```

### Input para contraseña

Ejemplo de contraseña utilizando campo de validación para capturar errores

```bash
<FormField label="Password" name="user-password" error={passError}>
    <Input
        name="user-password"
        type="password"
        placeholder="Enter your password"
        error={passError}
        changeValue={(v) => {
            if (!v || v.trim() === '') {
                setPassError("Este campo es requerido");
            } else if (v && v.length < 8) {
                setPassError("Contraseña muy corta");
            } else {
                setPassError(null);
            }
            handlerValue(v);
        }}
    />
</FormField>
```

### Input para campo disabled

```bash
<div className="panel">
    <FormField label="Disabled example" name="disabled-input">
        <Input
            name="disabled-input"
            disabled
            placeholder="You cannot type here"
            changeValue={handlerValue}
        />
    </FormField>
</div>
```

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
