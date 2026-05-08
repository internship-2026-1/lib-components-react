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



## 🚀 Características Principales

- **Alto Uniforme:** Consistencia visual garantizada con un `height` fijo de `40px` en todas las variantes.
- **Sistema de Iconos Local:** Librería interna de SVGs optimizados que heredan el color del texto 
- **Diseño Dinámico:** Soporte integrado para múltiples variantes y tamaños mediante props.
- **Ancho Inteligente:** Implementación de `fit-content` para un ajuste perfecto al contenido (texto + icono).
- **Polimorfismo:** Basado en `React.forwardRef`, hereda todos los atributos y eventos nativos de HTML (`onClick`, `type`, `disabled`, etc.).

---

##  Guía de Uso

### Importación básica
```tsx

    <Button 
      variant="primary" 
      iconName="Email" 
      onClick={() => alert('Correo enviado')}
    >
      Enviar Mensaje
    </Button>

```

---

##  API del Componente (Props)


| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Define el esquema de color y bordes. |
| `size` | `'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Ajusta el padding y la fuente. `full` ocupa el 100% del ancho. |
| `iconName` | `keyof typeof Icons` | `undefined` | Nombre del icono a renderizar (ver lista abajo). |
| `...props` | `React.ButtonHTMLAttributes` | - | Soporta cualquier atributo estándar de un botón HTML. |

---

##  Variantes de Diseño

1.  **Primary:** Fondo azul intenso con texto blanco. Ideal para acciones principales.
2.  **Secondary:** Fondo azul tenue, borde gris y texto azul. Para acciones secundarias.
3.  **Tertiary:** Sin fondo ni bordes. Estilo limpio para acciones de baja prioridad.

---

##  Librería de Iconos Integrada

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

##  Mantenimiento Técnico

Los estilos están implementados como **objetos de JavaScript (Inline Styles)** dentro del archivo `Button.tsx`. Esto evita la colisión de clases CSS y facilita la portabilidad del componente.

Para agregar nuevos iconos:
1. Localiza el objeto `Icons` en `Button.tsx`.
2. Añade el código SVG asegurándote de usar `stroke="currentColor"` para la herencia de color.
