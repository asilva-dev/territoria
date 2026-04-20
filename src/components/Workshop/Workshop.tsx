import React from "react";
import styles from "./Workshop.module.css";

interface InfoItem {
  label: string;
  val: string;
}

const Workshop: React.FC = () => {
  const detalhes: InfoItem[] = [
    { label: "Duração", val: "4h ou 8h (Imersivo)" },
    { label: "Público", val: "Times de Produto, Design e Engenharia" },
    { label: "Formato", val: "Presencial ou Online ao vivo" },
    { label: "Foco", val: "IA Generativa, Prompt Engineering e Automação" },
  ];

  return (
    <section className={styles.secao} id="workshop">
      <div className={styles.container}>
        <div className={styles.grade}>
          <div>
            <h2 className={styles.titulo}>Workshop TerritorIA</h2>
            <p className={styles.texto}>
              Uma formação prática desenhada para tirar a IA do campo da
              especulação e trazê-la para o fluxo de trabalho real. Focamos em
              ferramentas que você e seu time podem usar amanhã.
            </p>
          </div>

          <aside className={styles.lateral}>
            {detalhes.map((item) => (
              <div key={item.label} className={styles.infoLinha}>
                <span className={styles.infoRotulo}>{item.label}</span>
                <span className={styles.infoValor}>{item.val}</span>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
