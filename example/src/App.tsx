import React, { useState } from 'react'
import { Input, Button, FormField, Textarea, Select } from '../../src'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select'

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select']

export default function App() {
  const [selected, setSelected] = useState<ComponentKey>('Button');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [passValue, setPassValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [error, setError] = useState<string | null>(null); 
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [passError, setPassError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);

  const handlerValue = (e: any) => { console.log(e)}

  function renderPanel() {
    switch (selected) {
      case 'Button':
        return (
          <div>
            <h2>Button</h2>
            <div className="state-row">
              <div className="panel">
                <Button onClick={() => alert('clicked')}>Default</Button>
              </div>
              <div className="panel">
                <Button disabled>Disabled</Button>
              </div>
              <div className="panel">
                <Button className="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        )

      case 'Input':
        return (
          <div>
            <h2>Input</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="Name" name="user-name" error={nameError}>
                  <Input 
                    name="user-name"  
                    placeholder="Enter your name" 
                    error={nameError}
                    changeValue={(v) => {
                      setNameValue(v || '');
                      setNameError(v?.trim() ? null : "Este campo es requerido");
                      handlerValue(v); // log en cosola
                    }} 
                  />
                </FormField>
              </div>

              {/* Tipo numerico - telefono */}
              <div className="panel">
                <FormField label="Phone number" name="user-phone-number" error={phoneError}>
                  <Input 
                    name="user-phone-number" 
                    type="tel"
                    placeholder="+502 0000-0000" 
                    value={phoneValue}
                    error={phoneError}
                    changeValue={(v) => {
                      setPhoneValue(v || '');
                        // Si esta vacio
                        if (!v) setPhoneError("Este campo es requerido");
                        // Si el numero telefonico es muy corto
                        else if (v.length < 8) setPhoneError("Debe tener al menos 8 digitos");
                        // Si el formato no es el correcto
                        else if (!/^\+?[\d\s-]+$/.test(v)) setPhoneError("Formato no valido");
                        // limpiamos el error
                        else setPhoneError(null);
                        handlerValue(v); // log en consola
                    }}
                  />
                </FormField>
              </div>

              {/* Tipo numerico - edad */}
              <div className="panel">
                <FormField label="Age" name="user-age" error={ageError}>
                  <Input 
                    name="user-age" 
                    type="number"
                    placeholder="0" 
                    error={ageError}
                    changeValue={(v) => {
                      // Logica de validacion
                      if (!v || v.trim() === "") {
                        // Si esta vacio 
                        setAgeError("Este campo es requerido");
                      } else if (Number(v) < 0) {
                        // No se acepta edad negativa
                        setAgeError("La edad debe ser un número positivo");
                      } else {
                        // limpiamos el error
                        setAgeError(null);
                      }
                      handlerValue(v); // log en consola
                    }}
                  />
                </FormField>
              </div>

              {/* Disabled */}
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

              {/* Prueba de email */}
              <div className="panel">
                <FormField label="Email" name="user-email" error={emailError}>
                  <Input 
                    name="user-email"
                    type="email" 
                    value={emailValue} 
                    error={emailError}
                    placeholder="example@mail.com"
                    changeValue={(v) => {
                      setEmailValue(v || '');
                      // Logica de validacion
                      if (!v || v.trim() === '') {
                        //Si esta vacio
                        setEmailError("Este campo es requerido");
                      } else if (!v.includes('@')) {
                        // Revisamos que lleve @
                        setEmailError("Email invalido");
                      } else {
                        // limpiamos el error
                        setEmailError(null);
                      }
                      handlerValue(v); // log en consola
                    }}
                  />
                </FormField>
              </div>

              {/* En caso de error */}
              <div className="panel">
                <FormField label="Validation Example" name="error-input" error={error}>
                  <Input 
                    name="user-name" 
                    error={error} // Se pasa el error para que se ponga rojo 
                    placeholder="Press the button" 
                    changeValue={handlerValue}
                  />
                </FormField>
                <div style={{marginTop:8}}>
                  <Button onClick={() => setError(error ? null : 'Este campo es requerido')}>
                    Toggle Error
                  </Button>
                </div>
              </div>

              {/* Prueba para contraseña */}
              <div className="panel">
                <FormField label="Password" name="user-password" error={passError}>
                  <Input 
                    name="user-password" 
                    type="password"       
                    placeholder="Enter your password"
                    error={passError}
                    changeValue={(v) => {
                      // Logica de validacion
                      if (!v || v.trim() === '') {
                        //Primero revisamos si ests vacio
                        setPassError("Este campo es requerido");
                      } else if (v && v.length < 8) {
                        // Si la constraseña es muy corta
                        setPassError("Contraseña muy corta"); 
                      } else {
                        // limpiamos el error
                        setPassError(null);
                      }
                      handlerValue(v); // log en consola
                    }}
                  />
                </FormField>
                <div style={{marginTop:8}}>
                  <Button onClick={() => alert('Login attempted')}>
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case 'Textarea':
        return (
          <div>
            <h2>Textarea</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="About">
                  <Textarea />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Textarea disabled />
                </FormField>
              </div>
            </div>
          </div>
        )

      case 'Select':
        return (
          <div>
            <h2>Select</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="Role">
                  <Select>
                    <option value="">Select a role</option>
                    <option value="dev">Developer</option>
                    <option value="pm">Product Manager</option>
                  </Select>
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Select disabled>
                    <option>Disabled</option>
                  </Select>
                </FormField>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="demo-root">
      <aside className="demo-sidebar">
        <h3>Components</h3>
        {components.map((c) => (
          <div
            key={c}
            className={`component-item ${selected === c ? 'active' : ''}`}
            onClick={() => setSelected(c)}
          >
            {c}
          </div>
        ))}
      </aside>

      <main className="demo-content">
        {renderPanel()}
      </main>
    </div>
  )
}
