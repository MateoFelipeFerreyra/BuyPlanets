import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import  imglogo from '../../assets/img/logo2.png'



const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg navbar navbar-dark bg-index">
            <div className="container-fluid">
                <img className="imglogo" src={imglogo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Home
                        </li>
                        <li className="nav-item">
                            Planets
                        </li>
                    </ul>
                </nav>
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar