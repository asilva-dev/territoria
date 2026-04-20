import React from "react";
import styles from "./Sobre.module.css";
import { PILARES } from "../../constants/regioes";

export default function Sobre(): React.ReactElement {
  return (
    <section className={styles.secao} id="sobre">
      <div className={styles.container}>
        <div className={styles.grade}>
          <div>
            <p className="eyebrow">A metodologia</p>
            <h2 className={styles.titulo}>
              Não é só <br />
              <em className="accent">tech.</em> <br />É transformação.
            </h2>
            <p className={styles.corpo}>
              A TerritorIA une três pilares que raramente aparecem juntos —
              Engenharia de Software, Educação e Pragmatismo.
            </p>
            <div className="divider" />
            <p
              className="text-terra"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              Amanda Silva · Especialista em Front-end e IA
            </p>
          </div>

          <div>
            {PILARES.map((p) => (
              <div key={p.num} className={styles.pilarItem}>
                <p className={styles.pilarNum}>{p.num}</p>
                <h3 className={styles.pilarTitle}>{p.title}</h3>
                <p className="text-muted">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
