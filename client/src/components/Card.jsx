import { Link } from "react-router-dom";

const Card = ({id, name, flagImage, continents})=>{
return(
    <div>
        <Link to={`/detail/${id}`}>
        <h3>Name: {name}</h3>
        </Link>
        <img src={flagImage} alt={name} width='300px' height='200px'/>
        <p>Continent: {continents}</p>
    </div>
)
}

export default Card;