# lib-components-react

Librería de componentes React con CSS puro, tipografía Manrope y sistema de diseño propio.

## Quick start

```bash
npm install
npm run dev
```

## Importación

```jsx
import { Card, CardGrid, PromoCard, InfoCard, Button, Text } from 'lib-components-react'
import 'lib-components-react/styles.css'
```

---

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
  tags={['64GB RAM', 'RTX 4090']}
  footer={<Button>DETALLES</Button>}
/>
```

| Prop | Tipo | Descripción |
|------|------|-------------|
| `image` | `string` | URL de la imagen |
| `imageAlt` | `string` | Texto alternativo |
| `title` | `ReactNode` | Título de la tarjeta |
| `description` | `ReactNode` | Descripción |
| `badge` | `string` | Etiqueta sobre la imagen (ej. "NUEVO") |
| `tags` | `string[]` | Chips informativos bajo la descripción |
| `footer` | `ReactNode` | Área de acciones (botones) |

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

| Prop | Tipo | Default |
|------|------|---------|
| `columns` | `number` | `3` |
| `gap` | `number` (px) | `20` |

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

| Prop | Tipo | Default |
|------|------|---------|
| `title` | `ReactNode` | — |
| `description` | `ReactNode` | — |
| `backgroundColor` | `string` | `#0056C3` |

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

| Prop | Tipo | Descripción |
|------|------|-------------|
| `icon` | `ReactNode` | Ícono (SVG, emoji, componente) |
| `title` | `ReactNode` | Título |
| `description` | `ReactNode` | Descripción |

---

## Layout de ejemplo (Figma)

```jsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
  <Card
    image="..."
    title="Horizon Alpha X"
    description="Workstation de alto rendimiento."
    badge="NUEVO"
    tags={['64GB RAM', 'RTX 4090']}
    footer={<Button>DETALLES</Button>}
  />
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
  --text: #191C1E;
  --muted: #565E74;
  --accent: #0056C3;
  --surface: #ECEEF0;
  --danger: #BA1A1A;
  --on-surface: #191C1E;
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
