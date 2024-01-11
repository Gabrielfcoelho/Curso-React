import Button from "./eventos/Button"

function Evento({numero}) {
    function meuEvento() {
        console.log(`Opa, fui ativado ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            {/*<button onClick={meuEvento}>Ativar!</button>*/}
        </div>
    )
}

export default Evento