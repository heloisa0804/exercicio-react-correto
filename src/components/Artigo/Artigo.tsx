import estilos from "./Artigo.module.css";

export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>✔ Motivação, disciplina e tecnologia para o seu treino!</h3>
      <p>
        Na Academia Digital, você tem acesso a treinos inovadores, acompanhamento de resultados e uma comunidade que inspira você a superar limites todos os dias. Treine com liberdade e alcance seus objetivos!
      </p>
    </article>
  );
}