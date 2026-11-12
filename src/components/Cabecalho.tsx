type CabecalhoProps = {
  menuAberto: boolean
  temaEscuro: boolean
  aoAlternarMenu: () => void
  aoAlternarTema: () => void
}

function Cabecalho({ menuAberto, temaEscuro, aoAlternarMenu, aoAlternarTema }: CabecalhoProps) {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <a href="#inicio" className="logo">
          <span className="logo-icone">ST</span>
          <span className="logo-nome">SemanaTec 2026</span>
        </a>

        <nav className={menuAberto ? 'menu menu-aberto' : 'menu'}>
          <a href="#inicio">Início</a>
          <a href="#programacao">Programação</a>
          <a href="#patrocinadores">Patrocinadores</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="cabecalho-acoes">
          <button
            type="button"
            className="botao-tema"
            aria-label="Alternar entre tema claro e escuro"
            onClick={aoAlternarTema}
          >
            <span className={temaEscuro ? '' : 'tema-ativo'}>☀</span>
            <span className={temaEscuro ? 'tema-ativo' : ''}>☾</span>
          </button>
          <a href="#contato" className="botao botao-principal botao-inscricao">
            Inscreva-se
          </a>
          <button type="button" className="botao-menu" aria-label="Abrir menu" onClick={aoAlternarMenu}>
            {menuAberto ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho
