import './DropDown.css'

export const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select>
                { /* arrow function que mapeia os itens das props, e retorna uma tag JSX option com o conteúdo dele */ }
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}