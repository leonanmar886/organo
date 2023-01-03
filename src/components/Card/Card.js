import './Card.css'
import {AiOutlineClose} from 'react-icons/ai'

export const Card = (props) => {
    return (
        <div className='player'>
            <AiOutlineClose size={25} className='delete' onClick=         
             {props.onDelete}/>
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