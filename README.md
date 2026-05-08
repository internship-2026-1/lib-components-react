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

# Lib - RadioButton
Asegúrate de tener el código del componente (RadioButton.tsx) y sus estilos (styles.css) en tu carpeta de componentes (por ejemplo, en src/components/).

1. Importar el componente<br>
En el archivo donde quieras usarlo (por ejemplo, en un formulario o una página), impórtalo así:<br>
import { RadioButton } from './components/RadioButton';<br>
import './components/styles.css'; // Asegúrate de cargar los estilos.

2. Implementar el estado (State)<br>
Para que React sepa cuál está seleccionado, necesitas un estado que guarde el valor actual:

const [opcion, setOpcion] = useState('');

const manejarCambio = (e: React.ChangeEvent< HTMLInputElement>) => {<br>
  setOpcion(e.target.value);
};

3. Renderizar los RadioButtons<br>
Úsalos pasando siempre el mismo name para que actúen como grupo, y compara el value con tu estado para el prop checked:

< div><br>
  < RadioButton<br> 
    name="grupo1"  -- El nombre vincula los botones como un solo equipo <br>
    value="A"  -- El valor único de este botón<br>
    checked={opcion === 'A'}  -- Condición para que se pinte como seleccionado<br>
    onChange={manejarCambio}  -- Función que se activa al hacer clic<br>
  />
  
  < div><br>
    < RadioButton<br>
      name="grupo1" <br>
      value="B"  <br>
      checked={opcion === 'B'}  <br>
      onChange={manejarCambio}  <br>
  />

Resumen de lo que necesitas pasarle:
- name: El mismo para todos los que van juntos.
- value: Lo que vale cada opción (ej. "rojo", "azul").
- checked: Una condición booleana (true/false).
- onChange: La función que actualiza tu estado al hacer click.