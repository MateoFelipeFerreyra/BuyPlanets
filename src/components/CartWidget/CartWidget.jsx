import './CartWidget.css'
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import carritologo from '../../assets/img/carritologo.png'



const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);

    return (
        <div>
            <Link style={{ textDecoration: "none" }} to='/cart'>
                <img className='carritologo' src={carritologo} alt="Carrito de Compras"/>
                {
                    cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
                }
            </Link>
        </div>
    )
}

export default CartWidget