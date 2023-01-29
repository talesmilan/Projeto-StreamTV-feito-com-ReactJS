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
                    <Route path="/filmes/acao" element={<Acao />} />
                    <Route path="/filmes/comedia" element={<Comedia />} />
                    <Route path="/filmes/terror" element={<Terror />} />
                    <Route path="/filme/:idFilme" element={<Filme/>} />
                    <Route path="/serie/:idSerie" element={<Serie/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )

}

export default Main