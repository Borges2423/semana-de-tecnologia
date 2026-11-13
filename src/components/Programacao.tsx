import type { Palestra } from '../data/tipos'
import CardPalestra from './CardPalestra'

type ProgramacaoProps = {
  palestras: Palestra[]
  favoritos: number[]
  aoFavoritar: (id: number) => void
}

function Programacao({ palestras, favoritos, aoFavoritar }: ProgramacaoProps) {
  return (
    <section id="programacao" className="secao">
      <div className="container">
        <h2 className="secao-titulo">Programação</h2>
        <p className="secao-subtitulo">Palestras dos 3 dias de evento • Favoritas: {favoritos.length}</p>

        <div className="lista-palestras">
          {palestras.map((palestra) => (
            <CardPalestra
              key={palestra.id}
              palestra={palestra}
              favorita={favoritos.includes(palestra.id)}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programacao
