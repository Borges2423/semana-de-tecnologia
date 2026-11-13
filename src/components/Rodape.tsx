function Rodape() {
  return (
    <footer id="contato" className="rodape">
      <div className="container rodape-colunas">
        <div>
          <h2 className="rodape-titulo">SemanaTec 2026</h2>
          <p className="rodape-descricao">Evento gratuito de tecnologia com palestras para estudantes e profissionais.</p>
        </div>

        <div>
          <h2 className="rodape-titulo">Contato</h2>
          <address className="rodape-contato">
            <a href="mailto:contato@semanatec.com">contato@semanatec.com</a>
            <span>Auditório Central</span>
          </address>
        </div>

        <div>
          <h2 className="rodape-titulo">Redes sociais</h2>
          <div className="redes">
            <a href="#contato" className="rede">
              IG
            </a>
            <a href="#contato" className="rede">
              IN
            </a>
            <a href="#contato" className="rede">
              YT
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">© 2026 SemanaTec</p>
    </footer>
  )
}

export default Rodape
