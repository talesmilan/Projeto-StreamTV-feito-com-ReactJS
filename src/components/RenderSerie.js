import {Link} from 'react-router-dom'

const RenderSerie = ({serie}) => {
    return (
        <Link className='col-lg-2 col-md-5 col-8 m-3 nav-link' to={`/serie/${serie.id}`}>
            <img className='img-filmes' width="200" src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.original_name} />
            <p className='m-2 col-12'>{serie.original_name}</p>
        </Link>
    )
}

export default RenderSerie