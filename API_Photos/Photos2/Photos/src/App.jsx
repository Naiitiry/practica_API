import { ImagenesGrid } from "./components/ImagesGrid.jsx"
import './App.css'

const App=()=>{

  return(
    <div className="App">
      <header>
        <h1 className="App-h1">Galería de imágenes de JsonHolder</h1>
      </header>
      <main>
        <ImagenesGrid/>
      </main>
    </div>
  )
}
export {App}