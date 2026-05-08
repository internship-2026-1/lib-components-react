import React, { useState } from 'react'
import { Input, Button, FormField, Textarea, Select, Card, CardGrid, PromoCard, InfoCard, Text, RadioButton, Table2} from 'lib'


type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'RadioButton' |  'Cards' | 'Typography' | "Table2";

const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select', 'RadioButton','Cards', 'Typography', 'Table2'];


export default function App() {
  const [selected, setSelected] = useState<ComponentKey>("Button");
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  function renderPanel() {
    switch (selected) {
      case "Button":
        return (
          <div>
            <h2>Button</h2>
            <div className="state-row">
              <div className="panel">
                <Button onClick={() => alert("clicked")}>Default</Button>
              </div>
              <div className="panel">
                <Button disabled>Disabled</Button>
              </div>
              <div className="panel">
                <Button className="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        );

      case "Input":
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
                      setError(error ? null : "This field is required")
                    }
                  >
                    Toggle Error
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case "Textarea":
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
        );

      case "Select":
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

        case 'RadioButton':
        return (
          <div>
            <h2>RadioButton</h2>
          <RadioButton 
            value="std"
            checked={value === 'std'}
            onChange={(e) => setValue(e.target.value)}
          />
          <RadioButton 
            value="exp"
            checked={value === 'exp'}
            onChange={(e) => setValue(e.target.value)}
          />
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

      case "Table2":
        return (
          <div>
            <Table2
              variant="progress"
              title="Especificaciones Técnicas"
              columns={[
                {
                  header: "Componente",
                  accessor: "componente",
                },
                {
                  header: "Especificación",
                  accessor: "especificacion",
                },
                {
                  header: "Estado",
                  accessor: "estado",
                  type: "progress",
                },
              ]}
              rows={[
                {
                  id: "procesador",
                  componente: "Procesador",
                  especificacion: "AMD Ryzen 9 7950X",
                  estado: 85,
                },
                {
                  id: "memoria",
                  componente: "Memoria",
                  especificacion: "128GB DDR5 6000MHz",
                  estado: 60,
                },
                {
                  id: "almacenamiento",
                  componente: "Almacenamiento",
                  especificacion: "2TB NVMe Gen5 SSD",
                  estado: 45,
                },
              ]}
            />
            <Table2
              variant="specifications"
              title="Especificaciones Técnicas"
              sections={[
                {
                  title: "Rendimiento",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="14" rx="1" />
                      <path d="M8 21h8" />
                      <path d="M12 18v3" />
                    </svg>
                  ),
                  rows: [
                    {
                      label: "Procesador",
                      value:
                        "Intel Core i9-14900HX (24 núcleos, 5.8 GHz Turbo)",
                    },
                    {
                      label: "Memoria RAM",
                      value: "64 GB DDR5-5600MHz Dual Channel",
                    },
                    {
                      label: "Gráficos",
                      value: "NVIDIA GeForce RTX 4090 (16GB GDDR6X, 175W TGP)",
                    },
                    {
                      label: "Almacenamiento",
                      value: "2 TB NVMe PCIe Gen4 M.2 SSD",
                    },
                  ],
                },
                {
                  title: "Pantalla y Chasis",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="4" y="5" width="16" height="12" rx="1" />
                      <path d="M8 21h8" />
                      <path d="M12 17v4" />
                    </svg>
                  ),
                  rows: [
                    {
                      label: "Panel",
                      value: '16" 4K OLED, 100% DCI-P3, HDR1000, 120Hz',
                    },
                    {
                      label: "Material",
                      value: "Aluminio aeroespacial fresado CNC",
                    },
                    {
                      label: "Peso",
                      value: "2.1 kg (4.6 lbs)",
                    },
                    {
                      label: "Batería",
                      value: "99.9 Wh (Máximo legal para vuelos)",
                    },
                  ],
                },
              ]}
            />
            <br />
            <Table2
              variant="simple"
              title="Especificaciones Técnicas"
              rows={[
                {
                  label: "Gráficos",
                  value: "RTX 4070 8GB GDDR6",
                },
                {
                  label: "Batería",
                  value: "99.9 Wh (12 horas)",
                },
                {
                  label: "Peso",
                  value: "1.85 kg",
                },
                {
                  label: "S.O.",
                  value: "Windows 11 Pro",
                },
              ]}
            />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="demo-root">
      <aside className="demo-sidebar">
        <h3>Components</h3>
        {components.map((c) => (
          <div
            key={c}
            className={`component-item ${selected === c ? "active" : ""}`}
            onClick={() => setSelected(c)}
          >
            {c}
          </div>
        ))}
      </aside>

      <main className="demo-content">{renderPanel()}</main>
    </div>
  );
}


