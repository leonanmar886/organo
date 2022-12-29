import './Card.css'

export const Card = (props) => {
    return (
        <div className='player'>
            <div className='header'>
                <img src={props.image} alt={props.username}/>
            </div>
            <div className='footer'>
                <h4>{props.username}</h4>
                <h5>{props.funct}</h5>
            </div>
        </div>
    )
}