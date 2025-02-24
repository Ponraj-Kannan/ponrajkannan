import './Nav.css'
import navlogo from './assets/vs-nav-logo.png'

function Nav() {
    return (
        <div className='nav'>
            <div className='nav-info'>
                <img className='nav-logo' src={navlogo} />
                <a className='nav-about' href='#'>About</a>
                <a className='nav-experience' href='#'>Experience</a>
                <a className='nav-projects' href='#'>Projects</a>
                <a className='nav-contact' href='#'>Contact</a>
            </div>
        </div>
    )
}

export default Nav