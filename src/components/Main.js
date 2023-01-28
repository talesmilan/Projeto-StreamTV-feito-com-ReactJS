import { API_KEY } from "./shared/API_KEY"
import NavBar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaginaInicial from './pages/PaginaInicial'
import Jumbotron from './Jumbotron'
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Acao from "./pages/Acao"


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
                </Routes>
            </BrowserRouter>
        </div>
    )

}

export default Main