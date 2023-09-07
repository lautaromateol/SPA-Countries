import { Link } from "react-router-dom"
import style from './Nav.module.css'

const Nav = ()=>{
return(
<div id={style.nav}>
<Link to='/'>
<button class={style.boton}>Info</button>
</Link>
<Link to='/home'>
<button class={style.boton}>Home</button>
</Link>
<Link to='/activity'>
<button class={style.boton}>Add activity</button>
</Link>
</div>
)}

export default Nav