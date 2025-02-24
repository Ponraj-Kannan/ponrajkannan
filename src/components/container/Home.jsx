import './Home.css'

import icon1 from './assets/vs-icon-1.png'
import close from './assets/close-icon.png'

import HomeNav from './Home-nav'
import Content from './Content'


function Home() {
    return (
        <div className='home'>
            {/* <HomeNav /> */}
            <Content />
        </div>
    )
}

export default Home