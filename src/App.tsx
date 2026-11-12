import { useEffect, useState } from 'react'
import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import Patrocinadores from './components/Patrocinadores'
import Programacao from './components/Programacao'
import Rodape from './components/Rodape'
import { palestras } from './data/palestras'
import { patrocinadores } from './data/patrocinadores'

function App() {
  const [favoritos, setFavoritos] = useState<number[]>(() => JSON.parse(localStorage.getItem('favoritos') ?? '[]'))
  const [menuAberto, setMenuAberto] = useState(false)
  const [temaEscuro, setTemaEscuro] = useState(false)

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  function alternarFavorito(id: number) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((favorito) => favorito !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  function alternarTema() {
    setTemaEscuro(!temaEscuro)
  }

  return (
    <div className={temaEscuro ? 'pagina tema-escuro' : 'pagina'}>
      <Cabecalho
        menuAberto={menuAberto}
        temaEscuro={temaEscuro}
        aoAlternarMenu={alternarMenu}
        aoAlternarTema={alternarTema}
      />

      <main>
        <Destaque />
        <Programacao palestras={palestras} favoritos={favoritos} aoFavoritar={alternarFavorito} />
        <Patrocinadores patrocinadores={patrocinadores} />
      </main>

      <Rodape />
    </div>
  )
}

export default App
