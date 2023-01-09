import Card from '../Card'
import './Team.css'

export const Team = (props) => {
    const cssSection = {backgroundColor: props.secondaryColor}
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
                />))}
            </div>
        </section>
    )
}