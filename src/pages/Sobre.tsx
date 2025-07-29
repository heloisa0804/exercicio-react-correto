import { useEffect } from "react";

export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre | Academia Digital";
  });

  return (
    <section>
      <h2>Sobre a Academia Digital</h2>

      <p>
        A <strong>Academia Digital</strong> nasceu para revolucionar a forma como você cuida da sua saúde e bem-estar. Somos uma plataforma online que une tecnologia, motivação e acompanhamento profissional para transformar sua rotina fitness.
      </p>

      <p>
        Aqui, você encontra <b>treinos personalizados</b>, aulas ao vivo e gravadas, planos de nutrição e uma comunidade que inspira você a ir além. Tudo isso com flexibilidade, praticidade e suporte de especialistas.
      </p>

      <p>
        Nosso time é formado por profissionais apaixonados por saúde, tecnologia e resultados reais. Trabalhamos para que cada aluno alcance seus objetivos, respeitando seu ritmo e estilo de vida.
      </p>

      <h3>Nossos diferenciais:</h3>
      <ul>
        <li>
          <b>Treinos para todos os níveis:</b> do iniciante ao avançado, com acompanhamento individualizado.
        </li>
        <li>
          <b>Flexibilidade total:</b> treine onde e quando quiser, pelo computador, tablet ou celular.
        </li>
        <li>
          <b>Comunidade ativa:</b> desafios, grupos de apoio e interação para manter a motivação sempre alta.
        </li>
        <li>
          <b>Conteúdo exclusivo:</b> vídeos, e-books, lives e dicas dos melhores profissionais.
        </li>
      </ul>

      <h3>O que oferecemos:</h3>
      <ul>
        <li>Treinos online e presenciais</li>
        <li>Planos de nutrição</li>
        <li>Acompanhamento de resultados</li>
        <li>Desafios e eventos exclusivos</li>
        <li>Suporte de especialistas</li>
      </ul>

      <p>
        Venha fazer parte da <b>Academia Digital</b> e descubra um novo jeito de cuidar do seu corpo e mente!
      </p>
    </section>
  );
}
