# lib-components-react

Librería mínima de componentes React con compatibilidad para formularios (react-hook-form) y estilos Tailwind.

## Quick start

1. Instala dependencias

```bash
npm install
```

2. Corre el ejemplo

```bash
npm run dev
```

## Diseño y compatibilidad

- Los componentes usan Tailwind por defecto. Pueden adaptarse a las clases de shadcn (componentes estilados con utilidades de Tailwind) cambiando las clases en `src/ui`.
- Los inputs usan forwardRef para integrarse con `react-hook-form`.

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
```

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