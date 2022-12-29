import Card from '../Card'
import './Team.css'

export const Team = (props) => {
    const cssSection = {backgroundColor: props.secondaryColor}
    const cssH3 = {borderColor: props.primaryColor,
                   color: props.fontColor
                  }

    return (
        <section className='team' style={cssSection}>
            <h3 style={cssH3}>{props.name}</h3>
            <div className = 'players'>
                {props.players.map( player => (<Card 
                username = {player.username}
                funct = {player.funct}
                image = {player.image}
                />))}
            </div>
        </section>
    )
}