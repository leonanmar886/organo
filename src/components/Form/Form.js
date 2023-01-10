import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import { Button } from '../Button/Button'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

export const Form = (props) => {

    const funcs = [
        'Duelista',
        'Iniciador',
        'Controlador',
        'Sentinela', 
        'Coach'
    ]

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [funct, setFunction] = useState('')
    const [team, setTeam] = useState('')
    const id = uuidv4()

    const toSave = (event) => {
        event.preventDefault()
        props.onPlayerRegistered({
            id,
            name, 
            username, 
            image, 
            funct, 
            team
        })
    }

    return (
        <section className='form'>
            <form onSubmit={toSave}>
                <h2>Preencha os dados para criar o card do player.</h2>
                <TextField
                    required = {true} 
                    label = "Nome" 
                    placeholder = "Digite o seu nome"
                    value = {name}
                    toChange = {value => setName(value)}
                />
                <TextField 
                    required = {true} 
                    label = "Username" 
                    placeholder = "Digite o seu nome de usuário"
                    value = {username}
                    toChange = {value => setUsername(value)}
                />
                <DropDown 
                    label="Time" 
                    items = {props.teams} 
                    value = {team}
                    toChange = {value => setTeam(value)}
                />
                <TextField 
                    label = "Imagem" 
                    placeholder = "Informe o endereço da sua imagem"
                    value = {image}
                    toChange = {value => setImage(value)}
                />
                <DropDown 
                    label="Função" 
                    items = {funcs} 
                    value = {funct}
                    toChange = {value => setFunction(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}