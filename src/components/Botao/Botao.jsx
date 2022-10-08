import './Botao.css'


const Botao = props =>{
    

    return (
       <button className='bt'>{props.children}</button>
    )
}

export default Botao