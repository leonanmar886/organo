import './Team.css'

export const Team = (props) => {
    const cssSection = {backgroundColor: props.secondaryColor}
    const cssH3 = {borderColor: props.primaryColor,
                   color: props.fontColor
                  }

    return (
        <section className='team' style={cssSection}>
            <h3 style={cssH3}>{props.name}</h3>
        </section>
    )
}