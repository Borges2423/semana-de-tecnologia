import { useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import Patrocinadores from './components/Patrocinadores'
import Programacao from './components/Programacao'
import Rodape from './components/Rodape'
import { palestras } from './data/palestras'
import { patrocinadores } from './data/patrocinadores'

function App() {
  const [favoritos, setFavoritos] = useState<number[]>([])

  function alternarFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favorito) => favorito !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <>
      <Cabecalho />

      <main>
        <Destaque />
        <Programacao palestras={palestras} favoritos={favoritos} aoFavoritar={alternarFavorito} />
        <Patrocinadores patrocinadores={patrocinadores} />
      </main>

      <Rodape />
    </>
  )
}

export default App
