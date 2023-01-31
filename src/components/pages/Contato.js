import { FormGroup, Form, Label, Input, Button } from "reactstrap"
import { useState } from "react"
import MensagemErros from "../MensagemErros"


const Contato = () => {

    const [dados, setDados] = useState({
        nome: "",
        email: "",
        motivo: "",
        mensagem: "",
        promocoes: false

      })
    
      const [ erros, setErros ] = useState([])
    
      const handleContato = (e) => {
        e.preventDefault()

        const error = []

        if (dados.nome === "" || dados.email === "" || dados.motivo === "" || dados.mensagem === "") {
            error.push("Você deve preencher todos os campos.")
        }
        if (dados.nome.length !== 0 && (dados.nome.length < 5 || dados.nome.length > 40)) {
            error.push("O nome deve ter entre 5 a 40 caracteres.")
        }
        if (dados.email.length !== 0 && (dados.email.length < 5 || dados.email.length > 40)) {
            error.push("O email deve ter entre 5 a 40 caracteres.")
        }
        if (dados.email.length !== 0 && !dados.email.includes("@")) {
            error.push('O email deve conter um arroba "@".')
        }
        if (dados.email.length !== 0 && !dados.email.includes(".")) {
            error.push('O email deve conter um ponto.')
        }

        console.log("error: "+ error)
        setErros(error)
        console.log("erros: " + erros)
        if (error.length === 0) {
            alert(`Mensagem enviada com sucesso!\nNome: ${dados.nome}\nEmail: ${dados.email}\nMotivo: ${dados.motivo}\nMensagem: ${dados.mensagem}\nPromoções: ${dados.promocoes}`)
        } else {
            window.scrollTo(0, 140)
        }
        
        }
    
      const handleOnChange = (e) => {
    
        const name = e.target.name
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        setDados({...dados, [name]: value})
    }


    return (
        <div>
            <h1 className="mx-5">Entre em Contato com a Gente</h1>
            <div className='mb-5 offset-lg-2 col-lg-8 col-12 mt-5 border p-5 rounded border-primary cadastro'> 
                <MensagemErros erros={erros} />
                <Form onSubmit={handleContato}>
                    <FormGroup>
                        <Label for="nome">Nome Completo</Label>
                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo"
                            onChange={handleOnChange} value={dados.nome} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Digite seu email"
                            onChange={handleOnChange} value={dados.email} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="motivo">Motivo da Mensagem</Label>
                        <Input type="select" name="motivo" id="motivo" onChange={handleOnChange} value={dados.motivo} required>
                            <option value="" checked disabled>Selecione uma opção</option>
                            <option>Sugestão</option>
                            <option>Reclamação</option>
                            <option>Dúvida</option>
                            <option>Elogio</option>
                            <option>Outros</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mensagem">Mensagem</Label>
                        <Input type="textarea" name="mensagem" id="mensagem" placeholder="Digite sua mensagem" rows="10" onChange={handleOnChange} value={dados.mensagem} required />
                    </FormGroup>
                    <FormGroup check className='m-4'>
                    <Label check>
                        <Input type="checkbox" onChange={handleOnChange} name="promocoes" checked={dados.promocoes} />
                        Deseja receber promoções no seu email?
                    </Label>
                    </FormGroup>
                    <Button className="bg-primary">Enviar Mensagem</Button>
                </Form>
            </div>    
        </div>
    )
}

export default Contato