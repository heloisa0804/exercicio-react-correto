import estilos from "./Rodape.module.css";

export default function Rodape() {
  const ano = new Date().getFullYear();
  return (
    <footer className={estilos.rodape}>
      <h2>Academia Digital</h2>
      <p>Sua plataforma de treinos online e bem-estar</p>
      <div>
        <p>
          Desenvolvido por <b>Heloisa</b> &copy; {ano} &mdash; Todos os direitos reservados.
        </p>
        <div className="footer-links">
          <a href="mailto:contato@academiadigital.com" target="_blank" rel="noopener noreferrer">
            <span className="footer-icon" role="img" aria-label="E-mail">📧</span>
            contato@academiadigital.com
          </a>
          <a href="https://www.linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer">
            <span className="footer-icon" role="img" aria-label="LinkedIn">💼</span>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
