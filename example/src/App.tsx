import React, { useState } from 'react'
import {Input,Button,FormField,Textarea,Select,Table} from 'lib'

type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'Table'

const components: ComponentKey[] = ['Button','Input','Textarea','Select','Table']

// SVG Icons
const EditIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
)

const DeleteIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
)

export default function App() {
  const [selected, setSelected] =
    useState<ComponentKey>('Button')

  const [value, setValue] = useState('')

  const [error, setError] =
    useState<string | null>(null)

  function renderPanel() {
    switch (selected) {
      case 'Button':
        return (
          <div>
            <h2>Button</h2>

            <div className="state-row">
              <div className="panel">
                <Button
                  onClick={() => alert('clicked')}
                >
                  Default
                </Button>
              </div>

              <div className="panel">
                <Button disabled>
                  Disabled
                </Button>
              </div>

              <div className="panel">
                <Button className="ghost">
                  Ghost
                </Button>
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
                      setValue(
                        (
                          e.target as HTMLInputElement
                        ).value
                      )
                    }
                  />
                </FormField>
              </div>

              <div className="panel">
                <FormField label="Disabled">
                  <Input
                    disabled
                    placeholder="disabled"
                  />
                </FormField>
              </div>

              <div className="panel">
                <FormField
                  label="Error"
                  error={error}
                >
                  <Input
                    value={value}
                    onChange={(e) =>
                      setValue(
                        (
                          e.target as HTMLInputElement
                        ).value
                      )
                    }
                  />
                </FormField>

                <div style={{ marginTop: 8 }}>
                  <Button
                    onClick={() =>
                      setError(
                        error
                          ? null
                          : 'This field is required'
                      )
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
                    <option value="">
                      Select a role
                    </option>

                    <option value="dev">
                      Developer
                    </option>

                    <option value="pm">
                      Product Manager
                    </option>
                  </Select>
                </FormField>
              </div>

              <div className="panel">
                <FormField label="Disabled">
                  <Select disabled>
                    <option>
                      Disabled
                    </option>
                  </Select>
                </FormField>
              </div>
            </div>
          </div>
        )

      case 'Table':
        const data = [
          {
            id: 1,
            name: 'RTX 4090 OC Edition',
            category: 'GPU',
            sku: 'RTX4090OC',
            stock: 12,
            price: 1849,
            status: 'Activo',
            isActive: true
          },
          {
            id: 2,
            name: 'AMD Ryzen 9 7950X',
            category: 'CPU',
            sku: 'RYZ7950X',
            stock: 4,
            price: 599,
            status: 'Stock Bajo',
            isActive: false
          },
          {
            id: 3,
            name: 'Intel Core I7-13700K',
            category: 'CPU',
            sku: 'I713700K',
            stock: 10,
            price: 699,
            status: 'Descontinuado',
            isActive: false
          }
        ]

        const columns = [
          {
            key: 'name',
            header: 'PRODUCTO'
          },
          {
            key: 'category',
            header: 'CATEGORÍA'
          },
          {
            key: 'sku',
            header: 'SKU'
          },
          {
            key: 'stock',
            header: 'STOCK'
          },
          {
            key: 'price',
            header: 'PRECIO',
            render: (row) => `Q${row.price}`
          },
          {
            key: 'status',
            header: 'ESTADO',
            render: (row) => (
              <span
                style={{
                  color:
                    row.status === 'Activo'
                      ? 'green'
                      : row.status ===
                        'Stock Bajo'
                      ? 'red'
                      : 'gray'
                }}
              >
                ● {row.status}
              </span>
            )
          },
          {
            key: 'actions',
            header: 'ACCIONES',
            render: (row) => {
              const isDisabled =
                !row.isActive

              return (
                <div
                  style={{
                    display: 'flex',
                    gap: '8px'
                  }}
                >
                  <button
                    className="action-btn edit"
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return

                      alert(
                        `Producto editado: ${row.name}`
                      )
                    }}
                  >
                    <EditIcon />
                  </button>

                  <button
                    className="action-btn delete"
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return

                      alert(
                        `Producto eliminado: ${row.name}`
                      )
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              )
            }
          }
        ]

        return (
          <div>
            <h2>Table</h2>

            <div className="panel">
              <Table
                data={data}
                columns={columns}
                itemsPerPage={2}
              />
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
              selected === c
                ? 'active'
                : ''
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