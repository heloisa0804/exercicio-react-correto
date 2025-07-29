import { useEffect } from "react";

export default function TiposDeTreino() {
  useEffect(() => {
    document.title = "Tipos de Treino | Academia Digital";
  });

  return (
    <section>
      <h2> ➡ Tipos de Treino</h2>

      <p>Conheça as principais modalidades e benefícios do treino online na Academia Digital:</p>

      <h2>🏋️‍♂️ Musculação</h2>
      <ul>
        <li>Fortaleça músculos e ossos com treinos guiados.</li>
        <li>Planos para todos os níveis e objetivos.</li>
      </ul>

      <h2>🤸‍♀️ Treinamento Funcional</h2>
      <ul>
        <li>Melhore equilíbrio, coordenação e resistência.</li>
        <li>Exercícios dinâmicos e adaptáveis ao seu espaço.</li>
      </ul>

      <h2>🧘 Yoga e Pilates</h2>
      <ul>
        <li>Trabalhe corpo e mente com aulas relaxantes e desafiadoras.</li>
        <li>Vídeos para todos os níveis, do iniciante ao avançado.</li>
      </ul>

      <h2>🏃‍♂️ HIIT e Cardio</h2>
      <ul>
        <li>Queime calorias e aumente o condicionamento físico.</li>
        <li>Treinos rápidos e eficientes para encaixar na rotina.</li>
      </ul>

      <h2>🥗 Nutrição e Bem-estar</h2>
      <ul>
        <li>Dicas de alimentação saudável e planos personalizados.</li>
        <li>Conteúdo exclusivo para potencializar seus resultados.</li>
      </ul>
    </section>
  );
}
