import { Link } from "react-router-dom";

function Menu () {
    return (<header className="menu">
<Link to="/">
    <button>Avaleht</button>
</Link>
<Link to="/Ostukorv">
    <button>Ostukorv</button>
</Link>
    </header>)
}
    
 export default Menu;