import { Link } from 'react-router-dom'

const Botoes = ({idPage, total, tipo}) => {
    return (
        <div className='col-12 col-sm-10 col-lg-12 row'>
            <Link className={`col-5 col-sm-3 col-lg-2 nav-link mb-4 p-0 btn btn-primary`} to={idPage > 1 ? `/${tipo}/${(Number(idPage) -1).toString()}` : `/${tipo}/${idPage}` }>
                <div className={`px-0 px-sm-5 my-2 text-white`}>Anterior</div>
            </Link>
            <div className='col-1 col-sm-6 col-lg-8'></div>
            <Link className={`col-5 col-sm-3 col-lg-2 nav-link mb-4 p-0 btn btn-primary`} to={total > idPage ? `/${tipo}/${(Number(idPage) + 1).toString()}` : `/${tipo}/${total}`}>
                <div className={`px-0 px-sm-5 my-2 text-white`}>Próximo</div>
            </Link>   
        </div>
        )
}

export default Botoes