import type { Patrocinador } from '../data/tipos'
import CardPatrocinador from './CardPatrocinador'

type PatrocinadoresProps = {
  patrocinadores: Patrocinador[]
}

function Patrocinadores({ patrocinadores }: PatrocinadoresProps) {
  return (
    <section id="patrocinadores" className="secao secao-clara">
      <div className="container">
        <h2 className="secao-titulo">Patrocinadores</h2>
        <p className="secao-subtitulo">Empresas que apoiam o evento</p>

        <div className="lista-patrocinadores">
          {patrocinadores.map((patrocinador) => (
            <CardPatrocinador key={patrocinador.id} patrocinador={patrocinador} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Patrocinadores
