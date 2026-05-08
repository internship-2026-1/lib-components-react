import React, { useState } from 'react'
import { Input, Button, FormField, Textarea, Select } from 'lib'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select'

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select']

export default function App() {
  const [selected, setSelected] = useState<ComponentKey>('Button')
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

  function renderPanel() {
    switch (selected) {
    //-----------------------------------------------------------------------------

      case 'Button':
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h2>Button Component</h2>

            {/* Sección de Variantes */}
            <section>
              <h3>Variantes de tamaños</h3>
              
                <Button variant="primary" onClick={() => console.log('Primary Click')}>
                  Primario
                </Button>
                <Button variant="secondary" onClick={() => console.log('Secondary Click')}>
                  Secundario
                </Button>
                <Button variant="tertiary" onClick={() => console.log('Tertiary Click')}>
                  Terciario
                </Button>
            </section>

            {/* Sección de Tamaños y Alto Uniforme */}
           
              {/* esto solo sirve para separar los botones */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}> 
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
              </div>
              <div style={{ width: '300px' }}>
                <Button size="full" variant="secondary">Full Width Button</Button>
              </div>
           
            <section>
              <h3>Global Icons </h3>
                <Button variant="primary" iconName="Bolt">
                  Con Rayo
                </Button>
                <Button variant="secondary" iconName="NewItem">
                  Nuevo Item
                </Button>
                <Button variant="tertiary" iconName="Arrow">
                  Siguiente
                </Button>
                <Button variant="secondary" iconName="Cart">
                  Carrito
                </Button>
            </section>

                <section>
                <h3>Evento de boton</h3>
                
                <Button 
                  variant="primary" 
                  iconName="Email" 
                  onClick={() => {
                    
                    alert('¡Correo enviado con éxito!');
                  }}
                >
                  Enviar Correo
                </Button>
                </section>
          </div>
  ) 
    //-----------------------------------------------------------------------------

      case 'Input':
        return (
          <div>
            <h2>Input</h2>
            <div className="state-row">
              <div className="panel">
                <FormField label="Name">
                  <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Input disabled placeholder="disabled" />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Error" error={error}>
                  <Input value={value} onChange={(e) => setValue((e.target as HTMLInputElement).value)} />
                </FormField>
                <div style={{marginTop:8}}>
                  <Button onClick={() => setError(error ? null : 'This field is required')}>Toggle Error</Button>
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
