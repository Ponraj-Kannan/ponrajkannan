import './AboutComp.css'


function AboutComp(props) {
    return (
        <>
            <div className='aboutComp'>
                <img src={props.logo} />
                <a href={props.link}>{props.name}</a>
                <div className='line'></div>
            </div>
            
        </>
    )
}

export default AboutComp