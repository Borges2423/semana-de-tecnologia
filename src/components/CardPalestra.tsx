import type { Palestra } from '../data/tipos'

type CardPalestraProps = {
  palestra: Palestra
}

function CardPalestra({ palestra }: CardPalestraProps) {
  return (
    <article className="card-palestra">
      <img className="card-palestra-imagem" src={palestra.imagem} alt={`Ilustração da trilha ${palestra.trilha}`} />
      <div className="card-palestra-conteudo">
        <span className="etiqueta">{palestra.trilha}</span>
        <h3 className="card-palestra-titulo">{palestra.titulo}</h3>
        <p className="palestrante">Palestrante: {palestra.palestrante}</p>
        <p className="horario">
          {palestra.data} • {palestra.horario} • {palestra.sala}
        </p>
        <div className="card-palestra-rodape">
          <p className="descricao">{palestra.descricao}</p>
          <button type="button" className="botao-favoritar" aria-label="Favoritar palestra">
            ♡
          </button>
        </div>
      </div>
    </article>
  )
}

export default CardPalestra
