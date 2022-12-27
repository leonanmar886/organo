import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import { Button } from '../Button/Button'

export const Form = () => {

    const teams = [
        'Loud',
        'Liquid',
        'OpTic Gaming',
        'NyP', 
        'Cloud9',
        'Furia'
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
                <TextField  required = {true} label = "Função" placeholder = "Digite a sua função"/>
                <TextField label = "Imagem" placeholder = "Informe o endereço da sua imagem"/>
                <DropDown label="Time" items = {teams} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}