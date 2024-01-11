import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1985}/>
                <Item marca="Fiat" anoLancamento={1964}/>
                <Item marca="Renault" />
                <Item />
            </ul>
        </>
    )
}

export default List