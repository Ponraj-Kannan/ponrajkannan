import Toolbar from './Toolbar'
import Explorer from './Explorer'
import Workspace from './Workspace'
import './Vscode.css'
import { useState } from 'react'

function Vscode() {

    const [explorerStatus, setExplorerStatus] = useState(true)
    
    function toggle(){
        setExplorerStatus(!explorerStatus)
    }

    return (
        <div className='vscode'>
            <Toolbar toggle={toggle}/>
            {explorerStatus && <Explorer />}
            <Workspace explorerStatus={explorerStatus}/>
        </div>
    )
}

export default Vscode