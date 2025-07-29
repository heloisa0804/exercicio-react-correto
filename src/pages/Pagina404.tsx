import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagina404() {
  useEffect(() => {
    document.title = "ERRO 404 | Academia Digital";
  });

  return (
    <section>
      <h2>🛠 Error...tente de novo</h2>
      <br />
      <p>
        A página que você procura não foi encontrada. 😭😭
      </p>
      <br />
      <p>
        O importante é continuar em movimento. Volte para a Academia Digital e siga firme nos seus objetivos!
      </p>

      <br />
      <p>
        <Link to="/">🔁 Voltar ao início</Link>
      </p>
    </section>
  );
}
