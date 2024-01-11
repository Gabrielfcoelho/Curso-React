import style from './Frase.module.css'


function Frase() {
    return (
        <div className= {style.fraseContainer}>
            <p className= {style.fraseContent}>This is a component</p>
        </div>
    )
}

export default Frase