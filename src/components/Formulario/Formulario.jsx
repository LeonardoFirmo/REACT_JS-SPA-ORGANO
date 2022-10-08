import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'


const Formulario = props => {

    const times = [
        'Programação',
        'Front-End',
        'Data science',
        'Devops',
        'UX Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    return (
        <section className='formulario'>
            <form action="" >
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder='Digite seu nome' />
                <CampoTexto label="Cargo" placeholder='Digite seu cargo' />
                <CampoTexto label="Imagem" placeholder='Digite o endereço da imagem' />
                <ListaSuspensa itens={times } label="Time"></ListaSuspensa>
                <Botao>Criar card</Botao>
            
            </form>
        </section>
    )

}


export default Formulario