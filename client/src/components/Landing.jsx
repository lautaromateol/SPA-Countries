import { Link } from "react-router-dom"

const Landing = ()=>{
return(
    <div>
        <h1>PI COUNTRIES</h1>
        <h2>HENRY Bootcamp</h2>
        <p>Proyecto Individual de la etapa LABS pertenciente al bootcamp de Henry. Creado con React, Redux, Node, Express, PostgreSQL y Sequelize</p>
        <Link to='/home'>
        <button>Home</button>
        </Link>
    </div>
)
}

export default Landing