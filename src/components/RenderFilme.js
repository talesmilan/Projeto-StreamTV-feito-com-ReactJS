import {Link} from 'react-router-dom'

const RenderFilme = ({filme}) => {
    return (
        <Link key={filme.id} className='col-lg-2 col-md-5 col-8 m-3 nav-link' to={filme.media_type === "tv" ? `/serie/${filme.id}` : `/filme/${filme.id}` }>
            <img className='img-filmes' width="200" src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title || filme.original_name} />
            <p className='m-2 col-12'>{filme.title || filme.original_name}</p>
        </Link>
    )
}

export default RenderFilme