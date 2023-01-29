import RenderFilme from '../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchFilmes } from '../fetchexports'
import {Button} from 'reactstrap'
import imagem from '../../imagens/Loading_icon.gif'

const Acao = () => {

    const [acao, setAcao] = useState({results: []})

    const [page, setPage] = useState(1)


    useEffect(() => {
        const recebe = fetchFilmes(page, 28)
        recebe.then(response => setAcao(response) )

    }, [page])


    const pageUp = () => {
        if (acao.total_pages > page) {
            setPage(page + 1)
        }
    }

    const pageDown = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    if (acao.results.length !== 0) {
        return (
            <div>
                <h1 className="mx-5 my-4">Filmes de Ação</h1>
                    <div className='row offset-1 col-10'>
                        {acao.results.map(filme => {
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

export default Acao