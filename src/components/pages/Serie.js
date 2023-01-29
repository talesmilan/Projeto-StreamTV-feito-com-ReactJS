import {useParams} from 'react-router-dom'
import { fetchSerie } from '../fetchexports'
import { useEffect, useState, Fragment } from 'react'
import {Button} from 'reactstrap'
import imagem from '../../imagens/Loading_icon.gif'

const Serie = () => {


    const serieId = useParams()
    console.log(serieId.idSerie)
    const [serie, setSerie] = useState({})

    useEffect(() => {
        const recebe = fetchSerie(serieId.idSerie)
        recebe.then(response => setSerie(response))
    }, [])


    console.log(serie)
    if (typeof serie.genres !== "undefined") {
        return (
            <div>
                <h1 className="mx-sm-5 mx-3">{serie.original_name}</h1>
                <div className='row offset-sm-1'>
                    <div className='col-12 col-sm-5 mb-5 mt-3 text-center'>
                        <img width="80%" src={"https://image.tmdb.org/t/p/w500" + serie.poster_path} alt={serie.title}></img>
                    </div >
                    <div className='col col-sm-5 mx-5 mt-3 text-center'>
                        <h4 className='mb-3'>Gênero: {serie.genres.map((genre) => {return (<Fragment key={genre.id} >{genre.name} </Fragment>)})}</h4>
                        <h4 className='mb-3'>Nota: {serie.vote_average}</h4>
                        <p>Sinopse: {serie.overview}</p>
                        <Button className='btn-lg bg-primary m-2'>Assistir Agora</Button>
                        <Button className='btn-lg bg-danger m-2'>Adicionar nos Favoritos</Button>
                    </div>
                </div>
            </div>
        ) 
    } else { return (<div className="text-center"><img src={imagem} alt="Carregando"></img></div>)}

}

export default Serie