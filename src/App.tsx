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

        <section id="programacao" className="secao">
          <div className="container">
            <h2 className="secao-titulo">Programação</h2>
            <p className="secao-subtitulo">Palestras dos 3 dias de evento</p>

            <div className="lista-palestras">
              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/frontend.svg" alt="Ilustração da trilha Front-end" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Front-end</span>
                  <h3 className="card-palestra-titulo">React do zero ao deploy</h3>
                  <p className="palestrante">Palestrante: Ana Souza</p>
                  <p className="horario">15/11 • 09h00 • Sala 1</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Como criar e publicar sua primeira aplicação com React e Vite.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/backend.svg" alt="Ilustração da trilha Back-end" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Back-end</span>
                  <h3 className="card-palestra-titulo">APIs REST com Node.js</h3>
                  <p className="palestrante">Palestrante: Bruno Lima</p>
                  <p className="horario">15/11 • 10h30 • Sala 2</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Rotas, verbos HTTP e boas práticas para montar uma API simples.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/dados.svg" alt="Ilustração da trilha Dados" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Dados</span>
                  <h3 className="card-palestra-titulo">Análise de dados com Python</h3>
                  <p className="palestrante">Palestrante: Carla Mendes</p>
                  <p className="horario">15/11 • 14h00 • Sala 1</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Primeiros passos com planilhas, gráficos e a biblioteca pandas.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/carreira.svg" alt="Ilustração da trilha Carreira" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Carreira</span>
                  <h3 className="card-palestra-titulo">Como conseguir o primeiro estágio em TI</h3>
                  <p className="palestrante">Palestrante: Diego Alves</p>
                  <p className="horario">15/11 • 16h00 • Auditório</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Currículo, portfólio e o que as empresas olham em uma entrevista.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/frontend.svg" alt="Ilustração da trilha Front-end" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Front-end</span>
                  <h3 className="card-palestra-titulo">CSS responsivo na prática</h3>
                  <p className="palestrante">Palestrante: Eduarda Rocha</p>
                  <p className="horario">16/11 • 09h00 • Sala 2</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Media queries e layouts que se adaptam do celular ao desktop.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/seguranca.svg" alt="Ilustração da trilha Segurança" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Segurança</span>
                  <h3 className="card-palestra-titulo">Segurança básica para aplicações web</h3>
                  <p className="palestrante">Palestrante: Felipe Santos</p>
                  <p className="horario">16/11 • 10h30 • Sala 1</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Senhas, HTTPS e os erros mais comuns que deixam um site vulnerável.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/dados.svg" alt="Ilustração da trilha Dados" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Dados</span>
                  <h3 className="card-palestra-titulo">Banco de dados: SQL x NoSQL</h3>
                  <p className="palestrante">Palestrante: Gabriela Costa</p>
                  <p className="horario">16/11 • 14h00 • Sala 2</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Quando usar cada tipo de banco e como escolher para o seu projeto.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/mobile.svg" alt="Ilustração da trilha Mobile" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Mobile</span>
                  <h3 className="card-palestra-titulo">Apps multiplataforma com React Native</h3>
                  <p className="palestrante">Palestrante: Henrique Dias</p>
                  <p className="horario">16/11 • 16h00 • Auditório</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Um único código para criar aplicativos Android e iOS.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/ia.svg" alt="Ilustração da trilha Inteligência Artificial" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">IA</span>
                  <h3 className="card-palestra-titulo">Inteligência artificial no dia a dia do dev</h3>
                  <p className="palestrante">Palestrante: Isabela Ferreira</p>
                  <p className="horario">17/11 • 09h00 • Auditório</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Ferramentas de IA que ajudam a programar e onde ter cuidado.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>

              <article className="card-palestra">
                <img className="card-palestra-imagem" src="/imagens/git.svg" alt="Ilustração de branches do Git" />
                <div className="card-palestra-conteudo">
                  <span className="etiqueta">Carreira</span>
                  <h3 className="card-palestra-titulo">Git e GitHub para trabalhar em equipe</h3>
                  <p className="palestrante">Palestrante: João Pereira</p>
                  <p className="horario">17/11 • 14h00 • Sala 1</p>
                  <div className="card-palestra-rodape">
                    <p className="descricao">Branches, commits e pull requests sem medo de errar.</p>
                    <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
                      ♡
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
