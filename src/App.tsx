import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import Programacao from './components/Programacao'
import Rodape from './components/Rodape'
import { palestras } from './data/palestras'

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Destaque />
        <Programacao palestras={palestras} />

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
