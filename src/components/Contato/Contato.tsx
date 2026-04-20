import React, { useState } from "react";
import styles from "./Contato.module.css";
import { useForm } from "../../hooks/useForm";

interface FormValues {
  nome: string;
  email: string;
  mensagem: string;
}

export default function Contato() {
  const [sent, setSent] = useState(false);

  const { values, loading, handleChange, handleSubmit } = useForm<FormValues>({
    initialValues: { nome: "", email: "", mensagem: "" },
    onSubmit: async (form) => {
      try {
        const response = await fetch("https://formspree.io/f/meevzekq", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSent(true);
        } else {
          throw new Error("Erro na resposta");
        }
      } catch (error) {
        alert("Erro ao conectar com o servidor.");
      }
    },
  });

  const infoContatos = [
    {
      label: "Email",
      val: "amanda.adgti@gmail.com",
      link: "mailto:amanda.adgti@gmail.com",
      svg: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      ),
    },
    {
      label: "Instagram",
      val: "@mandysporai",
      link: "https://www.instagram.com/mandysporai/",
      svg: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      ),
    },
    {
      label: "LinkedIn",
      val: "amanda-silva-dev",
      link: "https://www.linkedin.com/in/amanda-silva-dev/",
      svg: (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      ),
    },
    {
      label: "Base",
      val: "São Paulo, SP",
      link: "https://www.google.com/maps/search/São+Paulo",
      svg: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
  ];

  return (
    <section className={styles.secao} id="contato">
      <div className={styles.container}>
        <div className={styles.grade}>
          <div>
            <header className={styles.cabecalho}>
              <p className={styles.eyebrow}>Contato</p>
              <h2 className={styles.titulo}>
                Vamos
                <br />
                conversar?
              </h2>
              <p className={styles.subtitulo}>
                Seja para um workshop ou consultoria. Respondo em até 48h úteis.
              </p>
            </header>

            {sent ? (
              <div className={styles.notaSucesso}>
                <p className={styles.sucessoTexto}>✓ Mensagem enviada!</p>
                <p className={styles.infoValor}>
                  Obrigada pelo contato. Retorno em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.formulario}>
                <div className={styles.campo}>
                  <label htmlFor="nome" className={styles.rotulo}>
                    Nome ou empresa
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    className={styles.entrada}
                    value={values.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label htmlFor="email" className={styles.rotulo}>
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.entrada}
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label htmlFor="mensagem" className={styles.rotulo}>
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className={`${styles.entrada} ${styles.areaTexto}`}
                    value={values.mensagem}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={styles.botao}
                >
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </div>

          <aside className={styles.lateral}>
            <h3 className={styles.infoTitulo}>
              Amanda Silva
              <br />
              <span className={styles.accent}>TerritorIA</span>
            </h3>
            <div className={styles.listaInfo}>
              {infoContatos.map(({ label, val, link, svg }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoItem}
                >
                  <div className={styles.infoIconeArea}>
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {svg}
                    </svg>
                  </div>
                  <div className={styles.infoTextoArea}>
                    <span className={styles.infoRotulo}>{label}</span>
                    <span className={styles.infoValor}>{val}</span>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
