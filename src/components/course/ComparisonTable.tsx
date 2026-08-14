import styles from "./course.module.css";

export type ComparisonRow = {
  dimension: string;
  current: string;
  future: string;
};

type ComparisonTableProps = {
  rows: ComparisonRow[];
};

export function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <div className={styles.comparison}>
      <div className={styles.comparisonTableWrap}>
        <table>
          <thead>
            <tr>
              <th scope="col">Dimension</th>
              <th scope="col">5G (today)</th>
              <th scope="col">6G (≈2030)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dimension}>
                <th scope="row">{row.dimension}</th>
                <td>{row.current}</td>
                <td>{row.future}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.comparisonCards}>
        {rows.map((row) => (
          <article key={row.dimension} className={styles.comparisonCard}>
            <h3>{row.dimension}</h3>
            <dl>
              <div><dt>5G (today)</dt><dd>{row.current}</dd></div>
              <div><dt>6G (≈2030)</dt><dd>{row.future}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
