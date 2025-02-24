import './Toolbar.css'


function Toolbar(props) {
    return (
        <div className='toolbar'>
            <button onClick={props.toggle}>X</button>
        </div>
    )
}

export default Toolbar