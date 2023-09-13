import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getCountries, getActivities } from "../../redux/actions"
import { useDispatch } from "react-redux"
import style from './Landing.module.css'

const Landing = ()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    })

return(
    <div class={style.contenedor}>
        <h1>PI COUNTRIES</h1>
        <h2>HENRY Bootcamp</h2>
        <img id={style.mundo} src='https://svgsilh.com/svg/1341377.svg'/>
        <p id={style.p}>Proyecto Individual de la etapa LABS pertenciente al bootcamp de Henry.</p>
        <h3 id={style.h3}>Herramientas utilizadas</h3>
        <div class={style.imagenes}>
        <img class={style.herramientas} src='https://www.svgrepo.com/show/358128/react.svg'/>
        <img class={style.herramientas} src='https://www.svgrepo.com/show/303557/redux-logo.svg'/>
        <img class={style.herramientas} src='https://www.svgrepo.com/show/354333/sequelize.svg'/>
        <img class={style.herramientas} src='https://www.svgrepo.com/show/306591/postgresql.svg'/>
        <img class={style.herramientas} src='https://www.svgrepo.com/show/314392/node.svg'/>
        </div>
        <Link to='/home'>
        <button id={style.boton}>Home</button>
        </Link>
    </div>
)}

export default Landing;