# Guía de Tarjetas y Grids - lib-components-react

Documentación completa para usar los componentes de tarjetas y grids en tu librería.

## 📦 Componentes Disponibles

### 1. Card

Tarjeta básica y flexible que puede mostrar imagen, título, descripción y acciones.

#### Props

```typescript
interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  image?: string           // URL de la imagen
  imageAlt?: string        // Texto alternativo para la imagen
  title?: React.ReactNode  // Título de la tarjeta
  description?: React.ReactNode  // Descripción
  footer?: React.ReactNode // Contenido del footer (botones, etc)
  badge?: string           // Badge superpuesto en la esquina de la imagen
  tags?: string[]          // Array de etiquetas que se muestran bajo la descripción
}
```

#### Ejemplos

**Tarjeta básica con todos los elementos:**

```jsx
import { Card, Button } from 'lib-components-react'

export default function ProductCard() {
  return (
    <Card
      image="https://example.com/product.jpg"
      imageAlt="Producto"
      title="Producto Premium"
      description="Descripción del producto con características principales."
      badge="NUEVO"
      tags={['React', 'CSS', 'Component']}
      footer={<Button>Comprar</Button>}
    />
  )
}
```

**Tarjeta simple sin imagen:**

```jsx
<Card
  title="Artículo"
  description="Una tarjeta simple sin imagen."
  tags={['Tag 1', 'Tag 2']}
  footer={<Button>Leer más</Button>}
/>
```

**Tarjeta con contenido personalizado:**

```jsx
<Card title="Personalizado">
  <p>Puedes agregar cualquier contenido aquí.</p>
  <ul>
    <li>Punto 1</li>
    <li>Punto 2</li>
  </ul>
</Card>
```

---

### 2. CardGrid

Contenedor responsivo que organiza múltiples tarjetas en un grid.

#### Props

```typescript
interface CardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number  // Número de columnas (default: 3)
  gap?: number      // Espacio entre tarjetas en pixels (default: 20)
}
```

#### Comportamiento Responsivo

- **Desktop (>1024px):** `columns` especificadas
- **Tablet (768px - 1024px):** 2 columnas
- **Mobile (<768px):** 1 columna

#### Ejemplos

**Grid de 3 columnas (por defecto):**

```jsx
import { CardGrid, Card } from 'lib-components-react'

export default function ProductGrid() {
  return (
    <CardGrid>
      <Card title="Producto 1" />
      <Card title="Producto 2" />
      <Card title="Producto 3" />
      <Card title="Producto 4" />
    </CardGrid>
  )
}
```

**Grid personalizado con 4 columnas y gap mayor:**

```jsx
<CardGrid columns={4} gap={32}>
  <Card title="Item 1" />
  <Card title="Item 2" />
  <Card title="Item 3" />
  <Card title="Item 4" />
</CardGrid>
```

**Grid de 2 columnas:**

```jsx
<CardGrid columns={2} gap={16}>
  <Card title="Izquierda" />
  <Card title="Derecha" />
</CardGrid>
```

---

### 3. PromoCard

Tarjeta promocional de gran impacto visual con fondo completo.

#### Props

```typescript
interface PromoCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode        // Título principal
  description?: React.ReactNode  // Descripción/subtítulo
  backgroundColor?: string       // Color de fondo (default: #0056C3)
}
```

#### Ejemplos

**Promo card básica:**

```jsx
import { PromoCard } from 'lib-components-react'

export default function PromoBanner() {
  return (
    <PromoCard
      title="Promoción"
      description="Descuento del 15% en componentes seleccionados este mes."
    />
  )
}
```

**Promo card con color personalizado:**

```jsx
<PromoCard
  title="Black Friday"
  description="Hasta 50% de descuento en todos los productos."
  backgroundColor="#BA1A1A"
/>
```

**Promo card con contenido custom:**

```jsx
<PromoCard backgroundColor="#7c3aed" title="¡Únete!" description="Obtén acceso exclusivo">
  <Button>Empezar ahora</Button>
</PromoCard>
```

---

### 4. InfoCard

Tarjeta pequeña para mostrar información con ícono, título y descripción.

#### Props

```typescript
interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode         // Ícono (emoji, SVG, etc)
  title?: React.ReactNode        // Título
  description?: React.ReactNode  // Descripción
}
```

#### Ejemplos

**Info card con emoji:**

```jsx
import { InfoCard } from 'lib-components-react'

export default function SupportCard() {
  return (
    <InfoCard
      icon="📱"
      title="Soporte Técnico 24/7"
      description="Asistencia experta para tu configuración."
    />
  )
}
```

**Múltiples info cards en grid:**

```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
  <InfoCard
    icon="🚀"
    title="Rápido"
    description="Carga en milisegundos."
  />
  <InfoCard
    icon="🔒"
    title="Seguro"
    description="Encriptación de nivel empresa."
  />
  <InfoCard
    icon="⚙️"
    title="Configurable"
    description="Personaliza según tus necesidades."
  />
  <InfoCard
    icon="📊"
    title="Análitica"
    description="Métricas en tiempo real."
  />
</div>
```

**Info card con SVG:**

```jsx
<InfoCard
  icon={<YourSVGIcon />}
  title="Integración"
  description="Compatible con tu stack tecnológico."
/>
```

---
�️ Etiquetas (Tags)

La prop `tags` permite agregar etiquetas a las tarjetas:

```jsx
<Card
  title="Artículo"
  description="Con etiquetas"
  tags={['React', 'CSS', 'TypeScript', 'Component']}
/>
```

Las etiquetas se renderizan como elementos inline con estilo personalizable editando `.lc-card-tag` en el CSS.

---

## �
## 🎨 Personalización con CSS

Todos los componentes utilizan variables CSS que se pueden personalizar:

### Variables CSS Disponibles

```css
:root {
  --bg: #ffffff;              /* Color de fondo principal */
  --text: #191C1E;            /* Color de texto principal */
  --muted: #565E74;           /* Color de texto secundario */
  --border: #e6e8eb;          /* Color de bordes */
  --accent: #0056C3;          /* Color de énfasis (badges, botones) */
  --container: #256FE7;       /* Color de contenedor secundario */
  --surface: #ECEEF0;         /* Color de superficie/fondo secundario */
  --danger: #BA1A1A;          /* Color de error/peligro */
  --on-surface: #191C1E;      /* Color de texto sobre superficie */
}
```

### Personalizar Tema Global

```css
/* En tu archivo de estilos */
:root {
  --bg: #f9fafb;
  --text: #111827;
  --accent: #0056C3;
  --danger: #ef4444;
  --surface: #E8EAED;
}
```

### Clases CSS Personalizables

Puedes agregar tus propios estilos sobrescribiendo las clases:

```css
/* Hacer tarjetas más redondeadas */
.lc-card {
  border-radius: 16px;
}

/* Cambiar sombra de hover */
.lc-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Ajustar altura de imagen */
.lc-card-image {
  height: 250px;
}
```

---

## 📱 Responsive Design

Todos los componentes están optimizados para diferentes tamaños de pantalla.

### Breakpoints

```
Desktop:  > 1024px
Tablet:   768px - 1024px
Mobile:   < 768px
```

### Grid Responsivo

El `CardGrid` cambia automáticamente:

```
Desktop (3 cols) → Tablet (2 cols) → Mobile (1 col)
```

Personalizar breakpoints editando `src/styles.css`:

```css
@media (max-width: 1024px) {
  .lc-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .lc-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔧 Composición de Componentes

### Tarjeta con botones múltiples

```jsx
<Card
  title="Opciones"
  description="Múltiples acciones disponibles"
  footer={
    <div style={{ display: 'flex', gap: 8 }}>
      <Button>Editar</Button>
      <Button className="ghost">Eliminar</Button>
    </div>
  }
/>
```

### Grid con espaciado dinámico

```jsx
<CardGrid columns={4} gap={12}>
  {items.map(item => (
    <Card key={item.id} title={item.name} />
  ))}
</CardGrid>
```

### Layout mixto

```jsx
<div>
  {/* Promo card principal */}
  <PromoCard
    title="Bienvenido"
    description="Descubre nuestros servicios"
    backgroundColor="#256FE7"
  />

  {/* Grid de tarjetas */}
  <CardGrid columns={3} gap={20}>
    <Card title="Servicio 1" />
    <Card title="Servicio 2" />
    <Card title="Servicio 3" />
  </CardGrid>

  {/* Info cards */}
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
    <InfoCard icon="✓" title="Rápido" />
    <InfoCard icon="✓" title="Seguro" />
    <InfoCard icon="✓" title="Flexible" />
    <InfoCard icon="✓" title="Soportado" />
  </div>
</div>
```

---

## 💡 Tips y Mejores Prácticas

1. **Usa CardGrid para múltiples tarjetas:** Proporciona responsividad automática
2. **PromoCard para destacar:** Usa colores vibrantes para llamar atención
3. **InfoCards para listas:** Perfecto para features, beneficios, etc
4. **Mantenlo simple:** La sobrecarga visual reduce usabilidad
5. **Prueba responsividad:** Abre DevTools y cambia el viewport
6. **Considera accesibilidad:** Usa `imageAlt` en imágenes

---

## 📦 Importación

```jsx
// Importar componentes individuales
import { Card, CardGrid, PromoCard, InfoCard } from 'lib-components-react'

// O importar todo
import * as LibComponents from 'lib-components-react'
```

---

## 🚀 Próximas Mejoras

- [ ] Animaciones de entrada
- [ ] Dark mode
- [ ] Skeleton loading
- [ ] Carrusel de tarjetas
- [ ] Filtros interactivos

---

¡Disfruta construyendo con estos componentes! 🎉
