import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Destaque />

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

        <section id="patrocinadores" className="secao secao-clara">
          <div className="container">
            <h2 className="secao-titulo">Patrocinadores</h2>
            <p className="secao-subtitulo">Empresas que apoiam o evento</p>

            <div className="lista-patrocinadores">
              <article className="card-patrocinador">
                <span className="patrocinador-logo logo-ouro">CT</span>
                <div>
                  <h3 className="patrocinador-nome">CodeTech Sistemas</h3>
                  <p className="patrocinador-nivel">Patrocínio Ouro</p>
                </div>
                <a href="#patrocinadores" className="patrocinador-link">
                  Site ↗
                </a>
              </article>

              <article className="card-patrocinador">
                <span className="patrocinador-logo logo-prata">NV</span>
                <div>
                  <h3 className="patrocinador-nome">Nuvem Verde Cloud</h3>
                  <p className="patrocinador-nivel">Patrocínio Prata</p>
                </div>
                <a href="#patrocinadores" className="patrocinador-link">
                  Site ↗
                </a>
              </article>

              <article className="card-patrocinador">
                <span className="patrocinador-logo logo-bronze">BD</span>
                <div>
                  <h3 className="patrocinador-nome">ByteDev Escola</h3>
                  <p className="patrocinador-nivel">Patrocínio Bronze</p>
                </div>
                <a href="#patrocinadores" className="patrocinador-link">
                  Site ↗
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </>
  )
}

export default App
