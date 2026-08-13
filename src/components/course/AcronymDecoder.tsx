import styles from "./course.module.css";

export type AcronymRow = {
  acronym: string;
  standsFor: string;
  explanation: string;
};

type AcronymDecoderProps = {
  rows: AcronymRow[];
};

export function AcronymDecoder({ rows }: AcronymDecoderProps) {
  return (
    <section id="acronym-decoder" className={styles.decoder} aria-labelledby="decoder-title">
      <p className={styles.eyebrow}>Keep this handy</p>
      <h2 id="decoder-title">Acronym Decoder — Module 1</h2>
      <div className={styles.decoderTableWrap}>
        <table>
          <thead>
            <tr>
              <th scope="col">Acronym</th>
              <th scope="col">Stands For</th>
              <th scope="col">Easy Explanation</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.acronym}>
                <th scope="row">{row.acronym}</th>
                <td>{row.standsFor}</td>
                <td>{row.explanation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.decoderCards}>
        {rows.map((row) => (
          <article key={row.acronym} className={styles.decoderCard}>
            <h3>{row.acronym}</h3>
            <dl>
              <div>
                <dt>Stands For</dt>
                <dd>{row.standsFor}</dd>
              </div>
              <div>
                <dt>Easy Explanation</dt>
                <dd>{row.explanation}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
