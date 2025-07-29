import { useEffect } from "react";

export default function Tecnologia() {
  useEffect(() => {
    document.title = "Tecnologia | Academia Digital";
  });

  return (
    <section>
      <h2>Tecnologia e Experiência</h2>

      <p>
        Na <strong>Academia Digital</strong>, a tecnologia é nossa aliada para proporcionar a melhor experiência de treino online. Utilizamos plataformas intuitivas, acompanhamento de resultados em tempo real e integração com apps de saúde.
      </p>

      <p>
        Nosso objetivo é tornar sua jornada fitness mais prática, motivadora e personalizada, conectando você a profissionais e recursos de onde estiver.
      </p>
    </section>
  );
}
