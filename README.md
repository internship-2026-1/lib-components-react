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


# IMPORTAR COMPONENTE
import Sumador from '../../src/ui/Sumador'

# COMO USARLO
const [cantidad, setCantidad] = useState(1)

case 'Sumador':
        return (
          <div>
            <h2>Sumador</h2>
            <div className="state-row">
              <div className="panel">
                <Sumador value={cantidad} onChange={setCantidad} min={1} max={10} />
              </div>
            </div>
          </div>
        )

# QUÉ PROPS ACEPTA?
value
onChange
min
max

