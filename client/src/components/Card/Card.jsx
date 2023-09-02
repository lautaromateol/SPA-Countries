import { Link } from "react-router-dom";
import './Card.css'

const Card = ({id, name, flagImage, continents})=>{
return(
    <div id='card'>
        <Link to={`/detail/${id}`}>
        <h3>Name: {name}</h3>
        </Link>
        <img src={flagImage} alt={name} width='300px' height='200px'/>
        <p>Continent: {continents}</p>
    </div>
)
}

export default Card;