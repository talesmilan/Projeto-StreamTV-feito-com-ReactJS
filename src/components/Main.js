import NavBar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaginaInicial from './pages/PaginaInicial'
import Jumbotron from './Jumbotron'
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Acao from "./pages/Acao"
import Footer from "./Footer"
import Filme from "./pages/Filme"
import Comedia from './pages/Comedia'
import Serie from "./pages/Serie"
import Terror from "./pages/Terror"
import Drama from './pages/Drama'
import Romance from './pages/Romance'
import Aventura from './pages/Aventura'
import Animacao from './pages/Animacao'
import Documentario from "./pages/Documentario"
import Fantasia from "./pages/Fantasia"
import Familia from './pages/Familia'

const Main = () => {

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Jumbotron />
                <Routes>
                    <Route path="/" element={<PaginaInicial />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/filmes/acao/:idPage" element={<Acao />} />
                    <Route path="/filmes/comedia/:idPage" element={<Comedia />} />
                    <Route path="/filmes/terror/:idPage" element={<Terror />} />
                    <Route path="/filmes/drama/:idPage" element={<Drama />} />
                    <Route path="/filmes/romance/:idPage" element={<Romance />} />
                    <Route path="/filmes/aventura/:idPage" element={<Aventura />} />
                    <Route path="/filmes/animacao/:idPage" element={<Animacao />} />
                    <Route path="/filmes/fantasia/:idPage" element={<Fantasia />} />
                    <Route path="/filmes/familia/:idPage" element={<Familia />} />
                    <Route path="/filmes/documentario/:idPage" element={<Documentario />} />
                    <Route path="/filme/:idFilme" element={<Filme/>} />
                    <Route path="/serie/:idSerie" element={<Serie/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )

}

export default Main