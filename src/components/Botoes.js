import { Link } from 'react-router-dom'

const Botoes = ({idPage, total, tipo}) => {
    return (
        <>
            <Link className={`col-2 nav-link mb-4 p-0 btn btn-primary`} to={idPage > 1 ? `/filmes/${tipo}/${(Number(idPage) -1).toString()}` : `/filmes/${tipo}/${idPage}` }>
                <div className={`px-5 my-2 text-white`}>Anterior</div>
            </Link>
            <div className='col-8'></div>
            <Link className={`col-2 nav-link mb-4 p-0 btn btn-primary`} to={total > idPage ? `/filmes/${tipo}/${(Number(idPage) + 1).toString()}` : `/filmes/${tipo}/${total}`}>
                <div className={`px-5 my-2 text-white`}>Próximo</div>
            </Link>   
        </>
        )
}

export default Botoes