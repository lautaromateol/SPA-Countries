import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card = ({id, name, flagImage, continents})=>{
return(
        <div id={style.card}>
        <Link to={`/detail/${id}`}>
        <h3>{name}</h3>
        </Link>
        <img src={flagImage} alt={name} width='200px' height='100px'/>
        <p>Continent: {continents}</p>
       </div>
)
}

export default Card;