import "./TextField.css";

export const TextField = (props) => {

    let value = 'João Silveira'

    const onTyped = (event) => {
        value = event.target.value
        console.log(value)
    }

    return (
        <div className="text-field">
            <label> {props.label} </label>
            <input value={value}  onChange={onTyped}  required = {props.required}  placeholder={props.placeholder}/>
        </div>
    )
}