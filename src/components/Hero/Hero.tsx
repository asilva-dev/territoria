import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  const rolarPara = (id: string): void => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <div className={styles.conteudo}>
          <span className={styles.tagline}>
            Inteligência Artificial de Ponta a Ponta
          </span>

          <h1 className={styles.titulo}>
            Tecnologia que entende o seu{" "}
            <span className={styles.destaque}>território.</span>
          </h1>

          <p className={styles.descricao}>
            Consultoria e workshops de IA Generativa pensados para empresas,
            coletivos e profissionais que buscam inovação com pé no chão e
            impacto real.
          </p>

          <div className={styles.acoes}>
            <button
              className={styles.botaoPrimario}
              onClick={() => rolarPara("contato")}
            >
              Vamos Conversar
            </button>
            <button
              className={styles.botaoSecundario}
              onClick={() => rolarPara("workshop")}
            >
              Conhecer Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
