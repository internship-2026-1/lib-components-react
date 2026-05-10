import React, { useState } from 'react'
import { Input, Button, FormField, Textarea, Select, Text } from 'lib'
import Sumador from '../../src/ui/Sumador'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'Typography' | 'Sumador'

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select', 'Typography', 'Sumador']

export default function App() {
  const [selected, setSelected] = useState<ComponentKey>('Button')
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [cantidad, setCantidad] = useState(1)

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
                <FormField label="Name">
                  <Input
                    value={value}
                    onChange={(e) =>
                      setValue((e.target as HTMLInputElement).value)
                    }
                  />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Disabled">
                  <Input disabled placeholder="disabled" />
                </FormField>
              </div>
              <div className="panel">
                <FormField label="Error" error={error}>
                  <Input
                    value={value}
                    onChange={(e) =>
                      setValue((e.target as HTMLInputElement).value)
                    }
                  />
                </FormField>
                <div style={{ marginTop: 8 }}>
                  <Button
                    onClick={() =>
                      setError(error ? null : 'This field is required')
                    }
                  >
                    Toggle Error
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
        
      case 'Typography':
        return(
          <div>
            <h2>Typography</h2>
            <div className="typography-column">
              <div className="panel">
                <Text variant='DisplayLarge'>
                  Ingenieria de precision
                </Text>
              </div>

              <div className='panel'>
                <Text variant='HeadlineLarge'>
                  Rendimiento de limites
                </Text>
              </div>

              <div className='panel'>
                <Text variant='HeadlineMedium'>
                  Especificaciones tecnicas
                </Text>
              </div>
              <div className='panel'>
                <Text variant='BodyLarge'>
                  Diseñado para entusiastas y profesionales que valoran la calidad de construcción y los detalles técnicos.
                </Text>
              </div>
              <div className='panel'>
                <Text variant='LabelLarge'>
                  CONFIGURAR AHORA
                </Text>
              </div>
              <div className='panel'>
                <Text variant='code'>
                  npm install @techspec/core
                </Text>
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
            className={`component-item ${
              selected === c ? 'active' : ''
            }`}
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