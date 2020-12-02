import './displayMenu.css';
const displayMenu = () =>{
    return(
        <div id = "displayMenuContainer">
            <h1 id='imageText'>Image</h1>
            <input type='text' id='inputText' placeholder='Search'/>
            <p id='unsplashtxt'>Unsplash</p>
        </div>
    )
}

export default displayMenu;