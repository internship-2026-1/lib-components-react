import React from "react";

export interface ProgressTableRow {
  componente: string;
  especificacion: string;
  estado: number;
}

export interface SpecificationRow {
  label: string;
  value: string;
}

export interface SpecificationSection {
  title: string;
  icon?: React.ReactNode;
  rows: SpecificationRow[];
}

export interface SimpleTableRow {
  label: string;
  value: string;
}

export type Table2Props =
  | {
      variant: "progress";
      title?: string;
      col1?: string;
      col2?: string;
      col3?: string;
      rows: ProgressTableRow[];
    }
  | {
      variant: "specifications";
      title?: string;
      sections: SpecificationSection[];
    }
  | {
      variant: "simple";
      title?: string;
      rows: SimpleTableRow[];
    };

export const Table2: React.FC<Table2Props> = (props) => {
  if (props.variant === "progress" && !props.rows?.length) {
    return <div className="lc-table-empty">No hay datos para mostrar.</div>;
  }
  if (props.variant === "progress") {
    return (
      <div className="lc-table-container">
        {props.title && <h2 className="lc-table-title">{props.title}</h2>}

        <table className="lc-table">
          <thead>
            <tr>
              <th>{props.col1}</th>
              <th>{props.col2}</th>
              <th>{props.col3}</th>
            </tr>
          </thead>

          <tbody>
            {props.rows.map((row, index) => (
              <tr key={index}>
                <td>{row.componente}</td>
                <td>{row.especificacion}</td>
                <td>
                  <div className="lc-progress">
                    <div
                      className="lc-progress-bar"
                      style={{ width: `${row.estado}%` }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (props.variant === "simple" && !props.rows?.length) {
    return <div className="lc-table-empty">No hay datos para mostrar.</div>;
  }

  if (props.variant === "simple") {
    return (
      <section className="lc-simple-table-container">
        {props.title && (
          <h2 className="lc-simple-table-title">{props.title}</h2>
        )}

        <div className="lc-simple-table">
          {props.rows.map((row, index) => (
            <div className="lc-simple-table-row" key={index}>
              <div className="lc-simple-table-label">{row.label}</div>

              <div className="lc-simple-table-value">{row.value}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (props.variant === "specifications" && !props.sections?.length) {
    return <div className="lc-table-empty">No hay secciones para mostrar.</div>;
  }

  return (
    <section className="lc-specs-container">
      {props.title && <h2 className="lc-specs-main-title">{props.title}</h2>}

      <div className="lc-specs-grid">
        {props.sections.map((section, sectionIndex) => (
          <div className="lc-specs-section" key={sectionIndex}>
            <div className="lc-specs-section-header">
              {section.icon && (
                <span className="lc-specs-icon">{section.icon}</span>
              )}

              <h3 className="lc-specs-section-title">{section.title}</h3>
            </div>

            <div className="lc-specs-title-line" />

            <div className="lc-specs-list">
              {section.rows.map((row, rowIndex) => (
                <div className="lc-specs-row" key={rowIndex}>
                  <div className="lc-specs-label">{row.label}</div>

                  <div className="lc-specs-value">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Table2.displayName = "Table2";
