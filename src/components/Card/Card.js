import './Card.css'

export const Card = (props) => {
    return (
        <div className='player'>
            <div className='header'>
                <img src='https://github.com/leonanmar886.png' alt='Leonan Marques'/>
            </div>
            <div className='footer'>
                <h4>Leonan Marques</h4>
                <h5>Aluno</h5>
            </div>
        </div>
    )
}