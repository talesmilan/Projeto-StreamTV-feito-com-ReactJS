import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import MensagemErros from '../MensagemErros';
import ValidaCPF from '../ValidaCPF';
import { validaCartao } from '../ValidaCartao';


const Assinar = () => {


    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        cpf: "",
        usuario: "",
        senha: "",
        password: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        credito: "",
        digitos: "",
        vencimento: "",
        promocoes: false

      })
    
    const [ erros, setErros ] = useState([])

      const handleCadastro = (e) => {
        e.preventDefault()

        const error = []

        if (dadosCadastro.nome === "" || dadosCadastro.email === "" || dadosCadastro.cpf === "" || dadosCadastro.usuario === "" || dadosCadastro.senha === "" || dadosCadastro.estado === "" || dadosCadastro.cidade === "" || dadosCadastro.bairro === "" || dadosCadastro.rua === "" || dadosCadastro.numero === "" || dadosCadastro.credito === "" || dadosCadastro.digitos === "" || dadosCadastro.vencimento === "" || dadosCadastro.password === "") {
            error.push("Todos os campos devem ser preenchidos.")
        }
        if (dadosCadastro.nome.length !== 0 && (dadosCadastro.nome.length < 5 || dadosCadastro.nome.length > 40)) {
            error.push("O nome deve ter entre 5 a 40 caracteres.")
        }
        if (dadosCadastro.email.length !== 0 && (dadosCadastro.email.length < 5 || dadosCadastro.email.length > 40)) {
            error.push("O email deve ter entre 5 a 40 caracteres.")
        }
        if (dadosCadastro.email.length !== 0 && !dadosCadastro.email.includes("@")) {
            error.push('O email deve conter um arroba "@".')
        }
        if (dadosCadastro.email.length !== 0 && !dadosCadastro.email.includes(".")) {
            error.push('O email deve conter um ponto.')
        }
        const cpf = new ValidaCPF(dadosCadastro.cpf)
        if (dadosCadastro.cpf.length !== 0 && !cpf.valida()) {
            error.push('CPF inválido.')
        }
        if (dadosCadastro.usuario.length !== 0 && (dadosCadastro.usuario.length < 5 || dadosCadastro.usuario.length > 20)) {
            error.push('O usuário deve ter entre 5 a 20 caracteres.')
        }
        if (dadosCadastro.senha.length !== 0 && (dadosCadastro.senha.length < 6 || dadosCadastro.senha.length > 10)) {
            error.push('A senha deve ter entre 6 a 10 digitos.')
        }
        if (dadosCadastro.senha.length !== 0 && dadosCadastro.senha !== dadosCadastro.password) {
            error.push('Para confirmar a senha você deve digitar a senha que você criou duas vezes corretamente.')
        }
        if (dadosCadastro.credito.length !== 0 && !validaCartao(dadosCadastro.credito)) {
            error.push('O cartão de crédito não é válido.')
        }
        if (dadosCadastro.digitos.length !== 0 && dadosCadastro.digitos.length !== 3) {
            error.push('Os digítos do cartão de crédito precisam ser sempre 3.')
        }

        setErros(error)

        if (error.length === 0) {
            alert(`Assinatura realizado com sucesso!\nNome: ${dadosCadastro.nome}\nEmail: ${dadosCadastro.email}\nCPF: ${dadosCadastro.cpf}\nUsuario: ${dadosCadastro.usuario}\nSenha: ${dadosCadastro.senha}\nEstado: ${dadosCadastro.estado}\nCidade: ${dadosCadastro.cidade}\nBairro: ${dadosCadastro.bairro}\nRua: ${dadosCadastro.rua}\nNumero: ${dadosCadastro.numero}\nNúmero do cartão de crédito: ${dadosCadastro.credito}\nDigitos: ${dadosCadastro.digitos}\nVencimento: ${dadosCadastro.vencimento}\n Promoções: ${dadosCadastro.promocoes}`)
        } else {
            window.scrollTo(0, 140)
        }


    
      }
    
      const handleOnChange = (e) => {
    
        const name = e.target.name
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        setDadosCadastro({...dadosCadastro, [name]: value})
    }

    return (
        <div>
            <h1 className="mx-5">Assinar a StreamTV</h1>
            <div className='offset-lg-2 col-12 col-lg-8 mt-5 border p-5 rounded border-primary mb-5'>
                <MensagemErros erros={erros} /> 
                <Form onSubmit={handleCadastro}>
                    <FormGroup>
                        <Label for="nome">Nome Completo</Label>
                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo"
                            onChange={handleOnChange} value={dadosCadastro.nome} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Digite seu email"
                            onChange={handleOnChange} value={dadosCadastro.email} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input type="number" name="cpf" id="cpf" placeholder="Digite seu CPF"
                            onChange={handleOnChange} value={dadosCadastro.cpf} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="usuario">Crie um Usuário</Label>
                        <Input type="text" name="usuario" id="usuario" placeholder="Crie um usuário"
                            onChange={handleOnChange} value={dadosCadastro.usuario} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Crie uma senha</Label>
                        <Input type="password" name="senha" id="senha" placeholder="Crie uma senha de 6 a 10 digitos" onChange={handleOnChange} value={dadosCadastro.senha} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Confirme sua senha</Label>
                        <Input type="password" name="password" id="password" placeholder="Digite novamente a senha que você criou" onChange={handleOnChange} value={dadosCadastro.password} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="estado">Estado</Label>
                        <Input type="select" name="estado" id="estado"
                            onChange={handleOnChange} value={dadosCadastro.estado} required>
                            <option value="" checked disabled>Selecione seu estado</option>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                            <option>BA</option>
                            <option>MT</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cidade">Cidade</Label>
                        <Input type="text" name="cidade" id="cidade" placeholder="Digite o nome da sua cidade" onChange={handleOnChange} value={dadosCadastro.cidade} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rua">Nome da Rua</Label>
                        <Input type="text" name="rua" id="rua" placeholder="Digite o nome da sua rua"
                            onChange={handleOnChange} value={dadosCadastro.rua} required />
                    </FormGroup>
                    <FormGroup className='row'>
                        <div className='col-12 col-sm-7'>
                        <Label for="bairro">Bairro</Label>
                        <Input type="text" name="bairro" id="bairro" placeholder="Digite o nome do seu bairro" onChange={handleOnChange} value={dadosCadastro.bairro} required />
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Label for="numero">Número</Label>
                            <Input type="number" name="numero" id="numero" placeholder="Digite o número da sua casa" onChange={handleOnChange} value={dadosCadastro.numero} required />
                        </div>
                    </FormGroup>
                    <FormGroup className='row'>
                        <div className='col-12 col-sm-6'>
                        <Label for="credito">Número do Cartão de crédito</Label>
                        <Input type="number" name="credito" id="credito" placeholder="Digite o número de seu cartão de crédito" onChange={handleOnChange} value={dadosCadastro.credito} required />
                        </div>
                        <div className='col-12 col-sm-2'>
                            <Label for="digitos">Digitos</Label>
                            <Input type="number" name="digitos" id="digitos" onChange={handleOnChange} value={dadosCadastro.digitos} required />
                        </div>
                        <div className='col-12 col-sm-4'>
                            <Label for="vencimento">Data de Vencimento</Label>
                            <Input type="text" name="vencimento" id="vencimento" placeholder="Digite a data de vencimento" onChange={handleOnChange} value={dadosCadastro.vencimento} required />
                        </div>
                    </FormGroup>
                    <FormGroup check className='m-4'>
                    <Label check>
                        <Input type="checkbox" name="promocoes" onChange={handleOnChange} checked={dadosCadastro.promocoes} />
                        Deseja receber promoções no seu email?
                    </Label>
                    </FormGroup>
                    <Button className='bg-primary' type="submit" value="submit">Assinar</Button>
                </Form>
            </div>    
        </div>
    )
}

export default Assinar