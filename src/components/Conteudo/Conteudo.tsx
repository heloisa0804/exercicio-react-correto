import Artigo from "../Artigo/Artigo";
import estilos from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      <section className={`${estilos.conteudosection} ${estilos.arredondada} ${estilos.sombra}`}>
        <h2>Academia Digital: Treine onde e quando quiser!</h2>

        <p>
          A Academia Digital é a sua plataforma completa para treinos online, saúde e bem-estar. Aqui, você encontra programas personalizados, acompanhamento profissional e tecnologia de ponta para transformar sua rotina fitness, sem sair de casa.
        </p>

        <Artigo />

      </section>
    </main>
  );
}