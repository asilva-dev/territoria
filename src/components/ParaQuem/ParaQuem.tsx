import React from "react";
import styles from "./ParaQuem.module.css";

const ParaQuem: React.FC = () => {
  return (
    <section className={styles.secao} id="para-quem">
      <div className={styles.container}>
        <h2 className={styles.titulo}>
          A consultoria serve <span className={styles.accent}>para quem:</span>
        </h2>

        <div className={styles.grade}>
          <div className={styles.card}>
            <h3 className={styles.cardTitulo}>Líderes Corporativos</h3>
            <p className={styles.cardDesc}>
              Que precisam implementar IA com segurança, ética e uma visão
              estratégica de longo prazo para seus times.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitulo}>Empreendedores Solo</h3>
            <p className={styles.cardDesc}>
              Quem toca o negócio sozinho e precisa ganhar escala e
              produtividade através de ferramentas inteligentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;
