import React from "react";
import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Sobre from "../components/Sobre/Sobre";
import ParaQuem from "../components/ParaQuem/ParaQuem";
import Workshop from "../components/Workshop/Workshop";
import { Brasil, Bio } from "../components/Brasil/BrasilBio";
import Contato from "../components/Contato/Contato";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <ParaQuem />
        <Workshop />
        <Brasil />
        <Bio />
        <Contato />
      </main>
      <footer
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "var(--color-neutral-ink)",
          color: "white",
        }}
      >
        <p>© 2026 TerritorIA - Amanda Silva</p>
      </footer>
    </>
  );
};

export default Home;
