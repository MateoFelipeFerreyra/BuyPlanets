import './CartWidget.css'
import carritologo from '../../assets/img/carritologo.png'

const CartWidget = () => {
    return (
        <div>
            <img className="carritologo" src={carritologo} alt="carrito" />
            <p> 10 </p>
        </div>
    )
}

export default CartWidget