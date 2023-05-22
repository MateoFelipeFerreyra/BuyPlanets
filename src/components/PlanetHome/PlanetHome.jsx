import './PlanetHome.css'
import galaxyhome from '../../assets/img/galaxy.jpg'
import astronauta from '../../assets/img/astronauta.png'

const PlanetHome = () => {
    return (
        <div className='intro'>
            <img className="galaxyhome" src={galaxyhome} alt="galaxy" />
            <img className="astronauta" src={astronauta} alt="astronauta" />
            <p>LETS BUY SOME</p>
            <p>PLANETS!</p>
        </div>
    )
}

export default PlanetHome