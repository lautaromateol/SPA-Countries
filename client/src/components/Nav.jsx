import { Link } from "react-router-dom"

const Nav = ()=>{
return(
<div>
<Link to='/home'>
<button>Home</button>
</Link>
<Link>
<button>Crear actividad</button>
</Link>
</div>
)}

export default Nav