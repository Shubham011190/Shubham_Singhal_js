import './displayMenu.css';
import image from '../../images/image.jpg'
const displayMenu = () =>{
    return(
        <div id = "displayMenuContainer">
            <h1 id='imageText'>Image</h1>
            <input type='text' id='inputText' placeholder='Search'/>
            <p id='unsplashtxt'>Unsplash</p>
            <div className = 'gridbox'>
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            <img src = {image} alt="Random" />
            </div>
        </div>
    )
}

export default displayMenu;