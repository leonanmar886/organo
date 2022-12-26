import './Form.css'
import TextField from '../TextField'

export const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do player.</h2>
                <TextField label = "Nome" placeholder = "Digite o seu nome"/>
                <TextField label = "Username" placeholder = "Digite o seu nome de usuário"/>
                <TextField label = "Função" placeholder = "Digite a sua função"/>
                <TextField label = "Imagem" placeholder = "Informe o endereço da sua imagem"/>
            </form>
        </section>
    )
}