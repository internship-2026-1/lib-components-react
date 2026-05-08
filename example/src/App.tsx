import React, { useState } from 'react'
import { Input, Button, FormField, Textarea, Select, Card, CardGrid, PromoCard, InfoCard, Text } from 'lib'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'Cards' | 'Typography'

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select', 'Cards', 'Typography']

export default function App() {
  const [selected, setSelected] = useState<ComponentKey>('Button')
  const [value, setValue] = useState('')
  const [error, setError] = useState<string | null>(null)

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
                <div style={{ marginTop: 8 }}>
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

      case 'Cards':
        return (
          <div>
            <h2>Tarjetas &amp; Grids</h2>

            {/* Figma layout: 2-column asymmetric grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'start' }}>
              {/* Left: tall product card */}
              <Card
                image="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=500&fit=crop"
                imageAlt="PC Gaming"
                title="Horizon Alpha X"
                description="Workstation de alto rendimiento para renderizado 3D y simulaciones."
                badge="NUEVO"
                tags={['64GB RAM', 'RTX 4090']}
                footer={<Button>DETALLES</Button>}
              />

              {/* Right: PromoCard + InfoCard stacked */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <PromoCard
                  title="Promoción"
                  description="Descuento del 15% en componentes seleccionados este mes."
                  backgroundColor="#0056C3"
                />
                <InfoCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0056C3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  }
                  title="Soporte Técnico 24/7"
                  description="Asistencia experta para tu configuración."
                />
              </div>
            </div>
          </div>
        )

      case 'Typography':
        return (
          <div>
            <h2>Typography</h2>
            <div className="typography-column">
              <div className="panel">
                <Text variant="DisplayLarge">Ingeniería de Precisión</Text>
              </div>
              <div className="panel">
                <Text variant="HeadlineLarge">Rendimiento sin límites</Text>
              </div>
              <div className="panel">
                <Text variant="HeadlineMedium">Especificaciones Técnicas</Text>
              </div>
              <div className="panel">
                <Text variant="BodyLarge">
                  Diseñado para entusiastas y profesionales que valoran la calidad de construcción y los detalles técnicos.
                </Text>
              </div>
              <div className="panel">
                <Text variant="LabelLarge">CONFIGURAR AHORA</Text>
              </div>
              <div className="panel">
                <Text variant="code">npm install @techspec/core</Text>
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
