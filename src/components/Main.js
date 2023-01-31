import NavBar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PaginaInicial from './pages/PaginaInicial'
import Jumbotron from './Jumbotron'
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"
import Acao from "./pages/filmes/Acao"
import Footer from "./Footer"
import Filme from "./pages/filmes/Filme"
import Comedia from './pages/filmes/Comedia'
import Serie from "./pages/series/Serie"
import Terror from "./pages/Terror"
import Drama from './pages/filmes/Drama'
import Romance from './pages/filmes/Romance'
import Aventura from './pages/filmes/Aventura'
import Animacao from './pages/filmes/Animacao'
import Documentario from "./pages/filmes/Documentario"
import Fantasia from "./pages/filmes/Fantasia"
import Familia from './pages/filmes/Familia'
import Misterio from "./pages/filmes/Misterio"
import FiccaoCientifica from "./pages/filmes/FiccaoCientifica"
import Guerra from "./pages/filmes/Guerra"
import TopFilmes from "./pages/filmes/TopFilmes"
import SeriesAcao from "./pages/series/SeriesAcao"
import SeriesComedia from "./pages/series/SeriesComedia"
import SeriesDrama from './pages/series/SeriesDrama'
import SeriesAnimacao from "./pages/series/SeriesAnimacao"
import SeriesFantasia from "./pages/series/SeriesFantasia"
import SeriesFamilia from "./pages/series/SeriesFamilia"
import SeriesMisterio from "./pages/series/SeriesMisterio"
import SeriesGuerra from "./pages/series/SeriesGuerra"
import SeriesDocumentario from "./pages/series/SeriesDocumentario"
import SeriesInfantil from "./pages/series/SeriesInfantil"
import TopSeries from "./pages/series/TopSeries"

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
                    <Route path="/filmes/misterio/:idPage" element={<Misterio />} />
                    <Route path="/filmes/guerra/:idPage" element={<Guerra />} />
                    <Route path="/filmes/ficcao-cientifica/:idPage" element={<FiccaoCientifica />} />
                    <Route path="/filmes/documentario/:idPage" element={<Documentario />} />
                    <Route path="/filmes/top-filmes/:idPage" element={<TopFilmes />} />
                    <Route path="/filme/:idFilme" element={<Filme/>} />
                    <Route path="/series/acao-e-aventura/:idPage" element={<SeriesAcao />} />
                    <Route path="/series/comedia/:idPage" element={<SeriesComedia />} />
                    <Route path="/series/drama/:idPage" element={<SeriesDrama />} />
                    <Route path="/series/animacao/:idPage" element={<SeriesAnimacao />} />
                    <Route path="/series/familia/:idPage" element={<SeriesFamilia />} />
                    <Route path="/series/misterio/:idPage" element={<SeriesMisterio />} />
                    <Route path="/series/infantil/:idPage" element={<SeriesInfantil />} />
                    <Route path="/series/documentario/:idPage" element={<SeriesDocumentario />} />
                    <Route path="/series/guerra-e-politica/:idPage" element={<SeriesGuerra />} />
                    <Route path="/series/fantasia-e-ficcao-cientifica/:idPage" element={<SeriesFantasia />} />
                    <Route path="/series/top-series/:idPage" element={<TopSeries />} />
                    <Route path="/serie/:idSerie" element={<Serie/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )

}

export default Main