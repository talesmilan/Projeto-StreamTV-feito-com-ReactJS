import RenderSerie from '../../RenderSerie'
import {useEffect, useState} from 'react'
import { fetchBuscarSerie } from '../../fetchexports'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import { Input, Button, Form } from 'reactstrap'
import MensagemErros from '../../MensagemErros'



const BuscarSerie = () => {

    const [busca, setBusca] = useState({})

    const [palavra, setPalavra] = useState("")

    const [erros, setErros] = useState([])

    const idPage = useParams()



    const iniciarBusca = (e) => {
        e.preventDefault()
        if (palavra === "") {
            setErros(["Você deve digitar um nome para fazer uma busca."])
        } else {
            setErros([])
            fetchBuscarSerie(palavra, idPage.idPage)
            .then(response => setBusca(response))
        }

    }
    
    const handleOnChange = (e) => {
    
        const target = e.target
        const value =  target.value
        setPalavra(value)
    }

    useEffect(() => {
        if (palavra !== "") {
            fetchBuscarSerie(palavra, idPage.idPage)
            .then(response => setBusca(response))
        }
    }, [idPage.idPage])

    return (
        <div>
            <h1 className="mx-5 my-4">Buscar Série</h1>
            <div className='offset-1 mb-5 row'>
                <div className='col-10'><MensagemErros erros={erros} /></div>
                <Form className='row' onSubmit={iniciarBusca}>
                    <div className='col-8 col-sm-5'>
                        <Input type="text" onChange={handleOnChange} placeholder='Digite um nome de uma série' value={palavra} />
                    </div>
                    <div className='col-4'>
                        <Button type="submit" className='bg-primary' >Buscar</Button>
                    </div>                    
                </Form>

            </div>

            { busca.results ? (
            <div>
                    <div className='row offset-1 col-10'>
                        {busca.results.map(serie => {
                            return (<RenderSerie key={serie.id} serie={serie} />)
                        })}
                        <Botoes idPage={idPage.idPage} total={busca.total_pages} tipo="series/buscar" />
                    </div>
            </div>
        ) : (<div className='m-5 p-5'></div>)
    } 
        </div>
        )

}


export default BuscarSerie