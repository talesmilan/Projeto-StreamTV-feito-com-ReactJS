import {Card, CardBody, CardHeader} from 'reactstrap'

const Sobre = () => {
    return (
        <div>
            <h1 className="mx-5">Sobre Nós</h1>
            <div className="row">
                <div className="offset-1 col-10 col-md-5 mt-5 sobreTexto text-center">
                    <p>Somos a StreamTV, uma empresa de streaming de filmes e séries com 7 anos no mercado. Acreditamos na força do entretenimento para unir pessoas e é por isso que estamos comprometidos em fornecer a melhor experiência de visualização possível para nossos assinantes. Nós oferecemos uma ampla seleção de conteúdo, incluindo títulos populares e lançamentos recentes, e trabalhamos incansavelmente para melhorar continuamente nossos serviços, com alta qualidade de streaming e recursos de pesquisa e recomendação.</p>
                    <p>Nossa motivação é tornar o entretenimento acessível para todos, sem fronteiras. Acreditamos que a diversão e o escape são essenciais para a vida e nos esforçamos para oferecer uma vasta seleção de conteúdo para atender aos gostos de todos. Junte-se a nós na jornada do entretenimento sem fronteiras.</p>                    
                </div>
                <div className="col-12 col-md-5 mt-5 sobreCartao">
                    <Card>
                        <CardHeader className="bg-primary text-white">Quadro Geral da Empresa</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Começou</dt>
                                <dd className="col-6">02 Dez. 2015</dd>
                                <dt className="col-6">Principal Acionista</dt>
                                <dd className="col-6">Bras. SK Inc.</dd>
                                <dt className="col-6">Faturamento anual</dt>
                                <dd className="col-6">R$ 20.950.071,00</dd>
                                <dt className="col-6">Funcionários</dt>
                                <dd className="col-6">1750</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default Sobre