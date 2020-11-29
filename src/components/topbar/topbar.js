import './topbar.css';
const topbar = () =>{
    return(
        <div className='container'>
            <p id='dashboard'>dashboard</p>
            <p id='pitchar'>pitchar</p>
            <p id='studio'>Studio</p>
            <p id='filename'>FileName</p>
            <p id='file_name'>Pitch#830</p>
            <p id='undo'>Undo</p>
            <p id='redo'>Redo</p>
            <p id='save'>Save</p>
            <button id='sharebtn'>Share</button>
        </div>
    )
}

export default topbar;