import { fetchTendencia } from "../fetchexports"
import { useState, useEffect } from "react"
import RenderFilme from "../RenderFilme"
import {Button} from 'reactstrap'
import imagem from '../../imagens/Loading_icon.gif'

const PaginaInical = () => {

    const [filmes, setFilmes] = useState({results: ""})

    const [page, setPage] = useState(1)

  

    useEffect(() => {
        const retorno = fetchTendencia(page)
        retorno.then(response => setFilmes(response))
    }, [page])

    
    const pageUp = () => {
        if (filmes.total_pages > page) {
            setPage(page + 1)
        }
    }

    const pageDown = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    if (filmes.results.length !== 0) {
        console.log(filmes)
        return (
            <div>
                <h1 className="mx-5 my-4">Destaques</h1>
                    <div className='row offset-1 col-10'>
                        {filmes.results.map(filme => {
                            return (<RenderFilme key={filme.id} filme={filme} />)
                        })}
                        <Button onClick={pageDown} className={`col-3 p-2 mb-4 bg-primary`}>Anterior</Button>
                        <div className='col-6'></div>
                        <Button onClick={pageUp} className={`col-3 p-2 mb-4 bg-primary`}>Próximo</Button>
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img> </div>
        )
    }
}

export default PaginaInical