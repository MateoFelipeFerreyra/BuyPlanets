const productos = [
    { nombre: "IcePlanet", precio: 600, id: "1", img: "../src/assets/img/IcePlanet.png", idCat: "2" },
    { nombre: "GreenPlanet", precio: 180, id: "2", img: "../src/assets/img/GreenPlanet.png", idCat: "2" },
    { nombre: "SlimePlanet", precio: 200, id: "3", img: "../src/assets/img/SlimePlanet.png", idCat: "2" },
    { nombre: "EartPlanet", precio: 400, id: "4", img: "../src/assets/img/EartPlanet.png", idCat: "3" },
    { nombre: "MechaPlanet", precio: 500, id: "5", img: "../src/assets/img/MechaPlanet.png", idCat: "3" },
    { nombre: "RedPlanet", precio: 700, id: "6", img: "../src/assets/img/RedPlanet.png", idCat: "3" },
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}