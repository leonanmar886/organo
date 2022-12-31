import './DropDown.css'

export const DropDown = (props) => {

    //função responsável por mudar o state do componente
    const onChanged = (event) => {
        props.toChange(event.target.value)
    }

    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={onChanged}  value={props.value}>
                <option value=""></option>
                { /* arrow function que mapeia os itens das props, e retorna uma tag JSX option com o conteúdo dele */ }
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}