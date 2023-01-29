import {useParams} from 'react-router-dom'
import { fetchFilme } from '../fetchexports'
import { useEffect, useState, Fragment } from 'react'
import {Button} from 'reactstrap'
import imagem from '../../imagens/Loading_icon.gif'

const Filme = () => {


    const filmeId = useParams()
    console.log(filmeId.idFilme)
    const [filme, setFilme] = useState({})

    useEffect(() => {
        const recebe = fetchFilme(filmeId.idFilme)
        recebe.then(response => setFilme(response))
    }, [])


    console.log(filme)
    if (typeof filme.genres !== "undefined") {
        return (
            <div>
                <h1 className="mx-sm-5 mx-3">{filme.title}</h1>
                <div className='row offset-sm-1'>
                    <div className='col-12 col-sm-5 mb-5 mt-3 text-center'>
                        <img width="80%" src={"https://image.tmdb.org/t/p/w500" + filme.poster_path} alt={filme.title}></img>
                    </div >
                    <div className='col col-sm-5 mx-5 mt-3 text-center'>
                        <h4 className='mb-3'>Gênero: {filme.genres.map((genre) => {return (<Fragment key={genre.id} >{genre.name} </Fragment>)})}</h4>
                        <h4 className='mb-3'>Nota: {filme.vote_average}</h4>
                        <p>Sinopse: {filme.overview}</p>
                        <Button className='btn-lg bg-primary m-2'>Assistir Agora</Button>
                        <Button className='btn-lg bg-danger m-2'>Adicionar nos Favoritos</Button>
                    </div>
                </div>
            </div>
        ) 
    } else { return (<div className="text-center"><img src={imagem} alt="Carregando"></img></div>)}

}

export default Filme