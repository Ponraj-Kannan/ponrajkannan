import './Home.css'

import icon1 from './assets/vs-icon-1.png'
import close from './assets/close-icon.png'


function HomeNav() {
    return (
        <div className='home-nav'>
            <div className='portfolio'>
                <img className='vs-icon' src={icon1} />
                <p>My Portfolio</p>
                <img className='close-icon' src={close} />
            </div>
        </div>
    )
}

export default HomeNav