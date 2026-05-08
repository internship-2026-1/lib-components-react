import React, { useState } from "react";
import { Input, Button, FormField, Textarea, Select, Table2 } from "lib";

type ComponentKey = "Button" | "Input" | "Textarea" | "Select" | "Table2";

const components: ComponentKey[] = [
  "Button",
  "Input",
  "Textarea",
  "Select",
  "Table2",
];

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
        );
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
