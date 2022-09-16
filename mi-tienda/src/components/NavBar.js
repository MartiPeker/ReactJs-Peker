import iconCart from "./cartWidget";
import {Link} from "react-router-dom";


const Navbar = () => { 
    return (
    <nav className = "navbar navbar-expand  navbar-dark bg-dark">
        <div className = "container-fluid flex-row-reverse">
        <div className="collapse navbar-collapse" id="navbarColor02">
        </div>
            <ul className= "navbar-nav">
                <li className="nav-item"><Link className="nav-link" to = "/">Home</Link></li>
                <li className="nav-item"><Link className='nav-link' to="/productos">Productos</Link></li>
                <li className="nav-item"><Link className="nav-link" to = "/detalles/:id/">Detalles</Link></li>
                <li className="nav-item"><Link to = "/cart/"><img src={iconCart} alt="cart"/></Link></li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;