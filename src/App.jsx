import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import jsImg from './assets/js.svg'
import javaImg from './assets/java.svg'
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const data = [
  {
    title: 'Tarjeta 1',
    description: 'Descripción de la tarjeta 1',
    image: jsImg,
    price: 10
  },
  {
    title: 'Tarjeta 2',
    description: 'Descripción de la tarjeta 2',
    image: javaImg,
    price: 15
  },
  {
    title: 'Tarjeta 2',
    description: 'Descripción de la tarjeta 2',
    image: reactLogo,
    price: 15
  },
  {
    title: 'Tarjeta 1',
    description: 'Descripción de la tarjeta 1',
    image: jsImg,
    price: 10
  },
  {
    title: 'Tarjeta 2',
    description: 'Descripción de la tarjeta 2',
    image: javaImg,
    price: 15
  },
  {
    title: 'Tarjeta 2',
    description: 'Descripción de la tarjeta 2',
    image: reactLogo,
    price: 15
  }
];

const carrito = []


function App() {

  function addCart(title, image, price, description) {
    carrito.push({
      title: title,
      image: image,
      price: price,
      description: description
    })
    console.log(carrito)
  }

  return (
    <>
      <Header />
      <div className="container_main">
        <div className="tienda_container">

          {data.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
              <button id={index+1}
              onClick={() => addCart(item.title, item.image, item.price, item.description)}
              >Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App




