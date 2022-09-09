import iconCart from "./cartWidget";
const Navbar = () => { 
    return (
<nav className = "navbar navbar-expand  navbar-dark bg-dark">
        <div className = "container-fluid flex-row-reverse">
        <div className="collapse navbar-collapse" id="navbarColor02">
        </div>
            <ul className= "navbar-nav">
                <li className="nav-item m-2">
                    <a className="nav-link" href="#">P1</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link" href="#">P2</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link" href="#">P3</a>
                </li>
                <li className="nav-item m-2">
                    <a className="nav-link" href="#">P4</a>
                </li>
            </ul>
            </div>
            <a href = "#"><img src={iconCart} alt="cart" /></a>
    </nav>
    );
}

export default Navbar;