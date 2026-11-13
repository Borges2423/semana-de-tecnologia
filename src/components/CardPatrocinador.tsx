import type { Patrocinador } from '../data/tipos'

type CardPatrocinadorProps = {
  patrocinador: Patrocinador
}

function CardPatrocinador({ patrocinador }: CardPatrocinadorProps) {
  return (
    <article className="card-patrocinador">
      <span className={`patrocinador-logo logo-${patrocinador.nivel.toLowerCase()}`}>{patrocinador.sigla}</span>
      <div>
        <h3 className="patrocinador-nome">{patrocinador.nome}</h3>
        <p className="patrocinador-nivel">Patrocínio {patrocinador.nivel}</p>
      </div>
      <a href={patrocinador.site} className="patrocinador-link" target="_blank" rel="noreferrer">
        Site ↗
      </a>
    </article>
  )
}

export default CardPatrocinador
