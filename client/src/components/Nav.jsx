import { Link } from "react-router-dom"

const Nav = ()=>{
return(
<div>
<Link to='/home'>
<button>Home</button>
</Link>
<Link to='/'>
<button>Info</button>
</Link>
<Link to='/activity'>
<button>Add activity</button>
</Link>
</div>
)}

export default Nav