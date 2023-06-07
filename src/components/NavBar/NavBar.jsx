import './NavBar.css'
import { NavLink, Link } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'
import imglogo from '../../assets/img/logo2.png'



const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar navbar-dark bg-index">
            <div className="container-fluid">
                <Link to={"/"}><img className="imglogo" src={imglogo} alt="logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/categoria/2`}> Planets 2 </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/categoria/3`}> Planets 3 </NavLink>
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar