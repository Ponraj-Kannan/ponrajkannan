import './Content.css'

import gitLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin-logo.png'
import vercelLogo from './assets/vercel-logo.png'
import AboutComp from './AboutComp'


function Content() {
    return (
        <div className='content'>
            <div className='home-info'>
                <div>
                    <div className='home-con1'>
                        <p className='about-title'>Ponraj Kannan</p>
                        <p className='about-role'>Technical trainer</p>
                    </div>
                    <div className='home-con2'>
                        <p>Skills</p>
                        <ul>
                            <li>Skills...</li>
                            <li>Projects...</li>
                            <li>Experience...</li>
                            <li>Get in touch...</li>
                        </ul>
                    </div>
                    <div className='home-con3'>
                        <p>Recent</p>
                        <ul>
                            <li>Portfolio <span>C:\Users\ponra\OneDrive\Desktop\Portfolio</span></li>
                            <li>practice <span>C:\Users\ponra\Dropbox\React Practice 0\practice</span></li>
                            <li>Project 3 <span>D:\React</span></li>
                            <li>React Practice 0<span>C:\Users\ponra\Dropbox\React Practice 0</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='home-about'>
                <div>
                    <p>About</p>
                    <AboutComp name={'Github'} logo={gitLogo} link='https://github.com/Ponraj-Kannan'/>
                    <AboutComp name={'LinkedIn'} logo={linkedinLogo} link='https://www.linkedin.com/in/ponraj-kannan-18915b1b7/'/>
                    <AboutComp name={'Vercel'} logo={vercelLogo} link='https://vercel.com/ponraj-kannans-projects'/>
                </div>
            </div>
        </div>
    )
}

export default Content
