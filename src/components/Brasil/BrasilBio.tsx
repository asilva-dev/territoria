import React from "react";
import styles from "./Brasil.module.css";
import { REGIOES_ATENDIMENTO, BIO_BADGES } from "../../constants/regioes";

export function Brasil() {
  return (
    <section className={styles.brasilSection} id="brasil">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Expansão</p>
        <h2 className={styles.h2light}>
          Brasil além do <em className={styles.accent}>eixo.</em>
        </h2>
        <p className={styles.lead}>
          A TerritorIA nasceu para ir onde o letramento em IA ainda não chegou
          com qualidade.
        </p>
        <div className={styles.grid}>
          {REGIOES_ATENDIMENTO.map((r) => (
            <div key={r.estado} className={styles.regiaoCard}>
              <p className={styles.regiaoEstado}>{r.estado}</p>
              <p className={styles.regiaoCidade}>{r.cidade}</p>
              <span
                className={styles.statusBadge}
                style={{ background: r.cor, color: r.corText }}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Bio() {
  return (
    <section className={styles.bioSection} id="bio">
      <div className={styles.inner}>
        <div className={styles.bioGrid}>
          <img src="/Mandy.jpeg" alt="Amanda Silva" className={styles.avatar} />
          <div>
            <p className={styles.eyebrow}>A consultora</p>
            <h2 className={styles.h2dark}>
              Amanda <em className={styles.accent}>Silva</em>
            </h2>
            <p className={styles.bioText}>
              Engenheira de Software com passagens por iFood e Accenture, Amanda
              Silva foca em democratizar a tecnologia. Sua atuação une a
              robustez da engenharia com a sensibilidade educacional para guiar
              times em novos territórios tecnológicos.
            </p>
            <div className={styles.badges}>
              {BIO_BADGES.map((b) => (
                <span key={b} className={styles.badge}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
