import './Banner.css'

export const Banner = () => {
    // a definição do nome da classe no header não pode ser como seria no html, pois 'class' é uma palavra reservada do js.
    return(
        <header className='banner'> 
            <img src="/images/banner.png" alt="O banner principal da página do Organo."/>
        </header>
    )
}