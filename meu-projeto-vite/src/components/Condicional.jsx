import { useState } from "react";

function Condicional() {
const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }
    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" name="gmail" id="gmail" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuario é: {userEmail} </p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>
    )
}

export default Condicional