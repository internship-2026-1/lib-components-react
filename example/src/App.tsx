import React, { useState } from "react";
import {
  Input,
  Button,
  FormField,
  Textarea,
  Select,
  Card,
  CardGrid,
  PromoCard,
  InfoCard,
  Text,
  RadioButton,
  Table,
  Table2,
  Sumador,
  SearchBar,
} from "lib";

type ComponentKey =
  | "Button"
  | "Input"
  | "Textarea"
  | "Select"
  | "RadioButton"
  | "Cards"
  | "Typography"
  | "Table"
  | "Table2"
  | "Sumador"
  | "SearchBar";

const components: ComponentKey[] = [
  "Button",
  "Input",
  "Textarea",
  "Select",
  "RadioButton",
  "Cards",
  "Typography",
  "Table",
  "Table2",
  "Sumador",
  "SearchBar",
];

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
);

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
);
// import { Input, Button, FormField, Textarea, Select, Text, SearchBar } from 'lib' // Duplicado, dejar solo una importación

// type ComponentKey = 'Button' | 'Input' | 'Textarea' | 'Select' | 'Typography' | 'SearchBar' // Duplicado, dejar solo una definición

// const components: ComponentKey[] = ['Button', 'Input', 'Textarea', 'Select', 'Typography', 'SearchBar'] // Duplicado, dejar solo una definición

// SearchBar: tipo de dato que usamos en la UI para guardar y renderizar resultados.
type SearchResult = {
  id: number;
  title: string;
  description: string;
};

// SearchBar: tipo de dato que esperamos recibir desde la API.
type ProductApiItem = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  const [value, setValue] = useState("");

  //sumador
  const [cantidad, setCantidad] = useState(1);
  const [selected, setSelected] = useState<ComponentKey>("Button");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [passError, setPassError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);

  const handlerValue = (e: any) => {
    console.log(e);
  };

  // SearchBar: estado para la busqueda y sus resultados.
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  // SearchBar: realiza la consulta y actualiza resultados o errores.
  async function handleDemoSearch() {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    setSearchError(null);

    if (!normalizedQuery) {
      setSearchResults([]);
      return;
    }

    try {
      setSearchLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("La API no respondio correctamente.");
      }

      const products: ProductApiItem[] = await response.json();

      setSearchResults(
        products
          .filter((item) => {
            return [item.title, item.description].some((field) =>
              field.toLowerCase().includes(normalizedQuery),
            );
          })
          .map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
          })),
      );
    } catch (searchRequestError) {
      setSearchResults([]);
      setSearchError(
        searchRequestError instanceof Error
          ? searchRequestError.message
          : "Ocurrio un error inesperado.",
      );
    } finally {
      setSearchLoading(false);
    }
  }

  function renderPanel() {
    switch (selected) {
      //-----------------------------------------------------------------------------

      case "Button":
        return (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <h2>Button Component</h2>

            {/* Sección de Variantes */}
            <section>
              <h3>Variantes de tamaños</h3>

              <Button
                variant="primary"
                onClick={() => console.log("Primary Click")}
              >
                Primario
              </Button>
              <Button
                variant="secondary"
                onClick={() => console.log("Secondary Click")}
              >
                Secundario
              </Button>
              <Button
                variant="tertiary"
                onClick={() => console.log("Tertiary Click")}
              >
                Terciario
              </Button>
            </section>

            {/* Sección de Tamaños y Alto Uniforme */}

            {/* esto solo sirve para separar los botones */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <Button size="sm" variant="primary">
                Small
              </Button>
              <Button size="md" variant="primary">
                Medium
              </Button>
              <Button size="lg" variant="primary">
                Large
              </Button>
            </div>
            <div style={{ width: "300px" }}>
              <Button size="full" variant="secondary">
                Full Width Button
              </Button>
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
                  alert("¡Correo enviado con éxito!");
                }}
              >
                Enviar Correo
              </Button>
            </section>
          </div>
        );
      //-----------------------------------------------------------------------------
      case "Button":
        return (
          <div>
            <h2>Button</h2>

            <div className="state-row">
              <div className="panel">
                <Button onClick={() => alert("clicked")}>Default</Button>
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
                <FormField label="Name" name="user-name" error={nameError}>
                  <Input
                    name="user-name"
                    placeholder="Enter your name"
                    error={nameError}
                    changeValue={(v) => {
                      setNameValue(v || "");
                      setNameError(
                        v?.trim() ? null : "Este campo es requerido",
                      );
                      handlerValue(v); // log en cosola
                    }}
                  />
                </FormField>
              </div>

              {/* Tipo numerico - telefono */}
              <div className="panel">
                <FormField
                  label="Phone number"
                  name="user-phone-number"
                  error={phoneError}
                >
                  <Input
                    name="user-phone-number"
                    type="tel"
                    placeholder="+502 0000-0000"
                    value={phoneValue}
                    error={phoneError}
                    changeValue={(v) => {
                      setPhoneValue(v || "");
                      // Si esta vacio
                      if (!v) setPhoneError("Este campo es requerido");
                      // Si el numero telefonico es muy corto
                      else if (v.length < 8)
                        setPhoneError("Debe tener al menos 8 digitos");
                      // Si el formato no es el correcto
                      else if (!/^\+?[\d\s-]+$/.test(v))
                        setPhoneError("Formato no valido");
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
                      setEmailValue(v || "");
                      // Logica de validacion
                      if (!v || v.trim() === "") {
                        //Si esta vacio
                        setEmailError("Este campo es requerido");
                      } else if (!v.includes("@")) {
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
                <FormField
                  label="Validation Example"
                  name="error-input"
                  error={error}
                >
                  <Input
                    name="user-name"
                    error={error} // Se pasa el error para que se ponga rojo
                    placeholder="Press the button"
                    changeValue={handlerValue}
                  />
                </FormField>
                <div style={{ marginTop: 8 }}>
                  <Button
                    onClick={() =>
                      setError(error ? null : "Este campo es requerido")
                    }
                  >
                    Toggle Error
                  </Button>
                </div>
              </div>

              {/* Prueba para contraseña */}
              <div className="panel">
                <FormField
                  label="Password"
                  name="user-password"
                  error={passError}
                >
                  <Input
                    name="user-password"
                    type="password"
                    placeholder="Enter your password"
                    error={passError}
                    changeValue={(v) => {
                      // Logica de validacion
                      if (!v || v.trim() === "") {
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
                <div style={{ marginTop: 8 }}>
                  <Button onClick={() => alert("Login attempted")}>
                    Login
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

      case "RadioButton":
        return (
          <div>
            <h2>RadioButton</h2>
            <RadioButton
              value="std"
              checked={value === "std"}
              onChange={(e) => setValue(e.target.value)}
            />
            <RadioButton
              value="exp"
              checked={value === "exp"}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        );

      case "Cards":
        return (
          <div>
            <h2>Tarjetas &amp; Grids</h2>

            {/* Figma layout: 2-column asymmetric grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
                alignItems: "start",
              }}
            >
              {/* Left: tall product card */}
              <Card
                image="https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&h=500&fit=crop"
                imageAlt="PC Gaming"
                title="Horizon Alpha X"
                description="Workstation de alto rendimiento para renderizado 3D y simulaciones."
                badge="NUEVO"
                tags={["64GB RAM", "RTX 4090"]}
                footer={<Button>DETALLES</Button>}
              />

              {/* Right: PromoCard + InfoCard stacked */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <PromoCard
                  title="Promoción"
                  description="Descuento del 15% en componentes seleccionados este mes."
                  backgroundColor="#0056C3"
                />
                <InfoCard
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0056C3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
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
        );

      case "Typography":
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
                  Diseñado para entusiastas y profesionales que valoran la
                  calidad de construcción y los detalles técnicos.
                </Text>
              </div>
              <div className="panel">
                <Text variant="LabelLarge">CONFIGURAR AHORA</Text>
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
            </div>
          </div>
        );

      case "Sumador":
        return (
          <div>
            <h2>Sumador</h2>
            <Sumador value={cantidad} onChange={setCantidad} min={1} max={10} />
          </div>
        );

      case "SearchBar":
        // SearchBar: ejemplo de uso del componente dentro del panel.
        return (
          <div>
            <h2>SearchBar</h2>
            <div className="panel">
              <SearchBar
                query={searchQuery}
                placeholder="Buscar producto en Fake Store API"
                buttonText={searchLoading ? "Buscando..." : "Buscar"}
                onQueryChange={setSearchQuery}
                onSearch={() => {
                  void handleDemoSearch();
                }}
              />
              {searchResults.length === 0 ? (
                <p className="lc-label">No hay resultados todavia.</p>
              ) : (
                <ul className="results-list">
                  {searchResults.map((item) => (
                    <li key={item.id}>
                      <strong>{item.title}</strong>
                      <div>{item.description}</div>
                    </li>
                  ))}
                </ul>
              )}
              {searchError && <p className="lc-error">{searchError}</p>}
            </div>
          </div>
        );

      case "Table":
        const data = [
          {
            id: 1,
            name: "RTX 4090 OC Edition",
            category: "GPU",
            sku: "RTX4090OC",
            stock: 12,
            price: 1849,
            status: "Activo",
            isActive: true,
          },
          {
            id: 2,
            name: "AMD Ryzen 9 7950X",
            category: "CPU",
            sku: "RYZ7950X",
            stock: 4,
            price: 599,
            status: "Stock Bajo",
            isActive: false,
          },
          {
            id: 3,
            name: "Intel Core I7-13700K",
            category: "CPU",
            sku: "I713700K",
            stock: 10,
            price: 699,
            status: "Descontinuado",
            isActive: false,
          },
        ];

        const columns = [
          {
            key: "name",
            header: "PRODUCTO",
          },
          {
            key: "category",
            header: "CATEGORÍA",
          },
          {
            key: "sku",
            header: "SKU",
          },
          {
            key: "stock",
            header: "STOCK",
          },
          {
            key: "price",
            header: "PRECIO",
            render: (row) => `Q${row.price}`,
          },
          {
            key: "status",
            header: "ESTADO",
            render: (row) => (
              <span
                style={{
                  color:
                    row.status === "Activo"
                      ? "green"
                      : row.status === "Stock Bajo"
                        ? "red"
                        : "gray",
                }}
              >
                ● {row.status}
              </span>
            ),
          },
          {
            key: "actions",
            header: "ACCIONES",
            render: (row) => {
              const isDisabled = !row.isActive;

              return (
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <button
                    className="action-btn edit"
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;

                      alert(`Producto editado: ${row.name}`);
                    }}
                  >
                    <EditIcon />
                  </button>

                  <button
                    className="action-btn delete"
                    disabled={isDisabled}
                    onClick={() => {
                      if (isDisabled) return;

                      alert(`Producto eliminado: ${row.name}`);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              );
            },
          },
        ];

        return (
          <div>
            <h2>Table</h2>

            <div className="panel">
              <Table data={data} columns={columns} itemsPerPage={2} />
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
