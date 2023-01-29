import RenderFilme from '../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../fetchexports'
import {Button} from 'reactstrap'
import imagem from '../../imagens/Loading_icon.gif'

const Comedia = () => {

    const [comedia, setComedia] = useState({results: []})

    const [page, setPage] = useState(1)


    useEffect(() => {
        const recebe = fetchFilmes(page, 35)
        recebe.then(response => setComedia(response) )

    }, [page])


    const pageUp = () => {
        if (comedia.total_pages > page) {
            setPage(page + 1)
        }
    }

    const pageDown = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    if (comedia.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Comédia</h1>
                    <div className='row offset-1 col-10'>
                        {comedia.results.map(filme => {
                            return (<RenderFilme filme={filme} />)
                        })}
                        <Button onClick={pageDown} className={`col-3 p-2 mb-4 bg-primary`}>Anterior</Button>
                        <div className='col-6'></div>
                        <Button onClick={pageUp} className={`col-3 p-2 mb-4 bg-primary`}>Próximo</Button>
                    </div>
            </div>
        )
    } else {
        return (
            <div className="text-center"><img src={imagem} alt="Carregando"></img></div>
        )
    }
}

export default Comedia