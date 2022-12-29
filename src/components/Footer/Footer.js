import './Footer.css'

export const Footer = () => {
    return (
        <footer className='bottom'>
            <ul>
                <li>
                    <img src='/images/fb.png' alt='Facebook Logo'/>
                </li>
                <li>
                    <img src='/images/tw.png' alt='Twitter Logo'/>
                </li>
                <li>
                    <img src='/images/ig.png' alt='Instagram Logo'/>
                </li>
            </ul>
            <img className='logo' src='/images/logo.png' alt='Organo Logo'/>
            
        </footer>
    )
}