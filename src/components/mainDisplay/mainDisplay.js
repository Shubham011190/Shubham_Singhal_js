import './mainDisplay.css';
import Sidemenu from '../sidemenu/sidemenu';
import DisplayMenu from '../displayMenu/displayMenu';
const mainDisplay = () =>{
    return(
        <div id="mainDisplayContainer">
            <Sidemenu />
            <DisplayMenu />
        </div>
    )
}

export default mainDisplay;