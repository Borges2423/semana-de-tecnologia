import './App.css'

function App() {
  return (
    <>
      <header className="cabecalho">
        <div className="container cabecalho-conteudo">
          <a href="#inicio" className="logo">
            <span className="logo-icone">ST</span>
            <span className="logo-nome">SemanaTec 2026</span>
          </a>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#programacao">Programação</a>
            <a href="#patrocinadores">Patrocinadores</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="cabecalho-acoes">
            <button type="button" className="botao-tema" aria-label="Alternar entre tema claro e escuro">
              <span className="tema-ativo">☀</span>
              <span>☾</span>
            </button>
            <a href="#contato" className="botao botao-principal botao-inscricao">
              Inscreva-se
            </a>
            <button type="button" className="botao-menu" aria-label="Abrir menu">
              ☰
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="destaque">
          <div className="container destaque-conteudo">
            <img
              className="destaque-imagem"
              src="/imagens/destaque.svg"
              alt="Ilustração de um palco com o telão da SemanaTec 2026"
            />

            <div className="destaque-texto">
              <span className="etiqueta">15 a 17 de novembro</span>
              <h1 className="destaque-titulo">Semana de Tecnologia 2026</h1>
              <p className="destaque-descricao">
                Três dias de palestras sobre desenvolvimento, dados, segurança e carreira, com profissionais da área e
                conteúdo para quem está começando ou quer se atualizar.
              </p>
              <p className="destaque-local">Local: Auditório Central • Entrada gratuita</p>

              <div className="destaque-botoes">
                <a href="#programacao" className="botao botao-principal">
                  Ver programação
                </a>
                <a href="#contato" className="botao botao-secundario">
                  Inscreva-se
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
