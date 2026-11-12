import './App.css'
import Cabecalho from './components/Cabecalho'
import Destaque from './components/Destaque'
import Patrocinadores from './components/Patrocinadores'
import Programacao from './components/Programacao'
import Rodape from './components/Rodape'
import { palestras } from './data/palestras'
import { patrocinadores } from './data/patrocinadores'

function App() {
  return (
    <>
      <Cabecalho />

      <main>
        <Destaque />
        <Programacao palestras={palestras} />
        <Patrocinadores patrocinadores={patrocinadores} />
      </main>

      <Rodape />
    </>
  )
}

export default App
