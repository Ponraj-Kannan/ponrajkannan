import './Workspace.css'

import Home from '../container/Home'


function Workspace(props) {

    const style = {
        // backgroundColor: props.explorerStatus ? '#54C392' : '#6A80B9',
        width: props.explorerStatus ? '997px' : '1237px'
    }

    return (
        <div className='workspace' style={style}>
            <Home />
        </div>
    )
}

export default Workspace