import Card from '../Card'
import './Team.css'
import hexToRgba from 'hex-to-rgba';

export const Team = (props) => {
    const cssSection = {backgroundColor: hexToRgba(props.secondaryColor, '0.97')}
    const cssH3 = {borderColor: props.primaryColor,
                   color: props.fontColor
                  }

    return (
        props.players.length > 0 && <section className='team' style={cssSection}>
            <input onChange={event =>           props.changeColor(event.target.value, props.name)}  value={props.secondaryColor}  type = 'color' className='input-color'/>
            <h3 style={cssH3}>{props.name}</h3>
            <div className = 'players'>
                {props.players.map( player => (
                    <Card username = {player.username}
                    funct = {player.funct}
                    image = {player.image}
                    key = {player.username}
                    onDelete = {props.onDelete}
                    cardColor = {props.secondaryColor}
                />))}
            </div>
        </section>
    )
}