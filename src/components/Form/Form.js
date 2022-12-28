import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import { Button } from '../Button/Button'

export const Form = () => {

    const teams = [
        'Duelista',
        'Iniciador',
        'Controlador',
        'Sentinela', 
        'Coach'
    ]

    const toSave = (event) => {
        event.preventDefault()
        console.log('Form submetido')
    }

    return (
        <section className='form'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do player.</h2>
                <TextField required = {true} label = "Nome" placeholder = "Digite o seu nome"/>
                <TextField required = {true}  label = "Username" placeholder = "Digite o seu nome de usuário"/>
                <TextField label = "Imagem" placeholder = "Informe o endereço da sua imagem"/>
                <DropDown label="Função" items = {teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}