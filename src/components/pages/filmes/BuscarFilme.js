import RenderFilme from '../../RenderFilme'
import {useEffect, useState} from 'react'
import { fetchBuscarFilme } from '../../fetchexports'
import { useParams } from 'react-router-dom'
import Botoes from '../../Botoes'
import { Input, Button, Form } from 'reactstrap'
import MensagemErros from '../../MensagemErros'



const BuscarFilme = () => {

    const [busca, setBusca] = useState({results: []})

    const [palavra, setPalavra] = useState("")

    const [erros, setErros] = useState([])

    const idPage = useParams()

    const [mensagem, setMensagem] = useState(false)


    const iniciarBusca = (e) => {
        e.preventDefault()
        if (palavra === "") {
            setErros(["Você deve digitar um nome para fazer uma busca."])
            setMensagem(false)
        } else {
            setErros([])
            fetchBuscarFilme(palavra, idPage.idPage)
            .then(response => setBusca(response))
            setMensagem(true)
        }

    }
    
    const handleOnChange = (e) => {
    
        const target = e.target
        const value =  target.value
        setPalavra(value)
        setMensagem(false)
    }

    useEffect(() => {
        if (palavra !== "") {
            fetchBuscarFilme(palavra, idPage.idPage)
            .then(response => setBusca(response))
        }
    }, [idPage.idPage])


    const resultado = function() {
        if (busca.results.length > 0) {
            return (
                <div>
                    <div className='row offset-1 col-10'>
                            {busca.results.map(filme => {
                                return (<RenderFilme key={filme.id} filme={filme} />)
                            })}
                            <Botoes idPage={idPage.idPage} total={busca.total_pages} tipo="filmes/buscar" />
                    </div>
                </div>
            )
        } else if (busca.results.length === 0 && mensagem && palavra !== "") {
            return (<div><p className='m-5'>Não foi encontrado filmes com esse nome.</p></div>)
        } else {
            return (<div className='m-5 p-5'></div>)
        }
    }

    return (
        <div>
            <h1 className="mx-5 my-4">Buscar Filme</h1>
            <div className='offset-1 mb-5 row'>
                <div className='col-10'><MensagemErros erros={erros} /></div>
                <Form className='row' onSubmit={iniciarBusca}>
                    <div className='col-8 col-sm-5'>
                        <Input type="text" onChange={handleOnChange} placeholder='Digite um nome de um filme' value={palavra} />
                    </div>
                    <div className='col-4'>
                        <Button type="submit" className='bg-primary' >Buscar</Button>
                    </div>                    
                </Form>

            </div>
            {resultado()}
        </div>
        )

}


export default BuscarFilme