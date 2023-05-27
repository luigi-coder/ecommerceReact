import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import imgJava from './assets/java.svg';
import imgJS from './assets/js.svg';
import imgPython from './assets/python.svg';
import imgPhp from './assets/php.svg';
import imgNode from './assets/nodejs.svg';
import imgSwift from './assets/swift.svg';
import imgCobol from './assets/cobol.svg';
import imgSql from './assets/mysql.svg';
import imgRuby from './assets/ruby.svg';


import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.css'

const data = [
  {
    title: 'Java',
    description: 'fsdfdsfdsfdssd',
    price: 1500,
    image: imgJava

  },
  {
    title: 'Javascript',
    description: 'fsdfdsfdsfdssd',
    price: 2000,
    image: imgJS

  },
  {
    title: 'Python',
    description: 'fsdfdsfdsfdssd',
    price: 2500,
    image: imgPython

  },
  {
    title: 'Php',
    description: 'fsdfdsfdsfdssd',
    price: 3000,
    image: imgPhp

  },
  {
    title: 'NodeJS',
    description: 'fsdfdsfdsfdssd',
    price: 3500,
    image: imgNode

  },
  {
    title: 'Swift',
    description: 'fsdfdsfdsfdssd',
    price: 4000,
    image: imgSwift

  },
  {
    title: 'Cobol',
    description: 'fsdfdsfdsfdssd',
    price: 4500,
    image: imgCobol
  },
  {
    title: 'SQL',
    description: 'fsdfdsfdsfdssd',
    price: 5000,
    image: imgSql
  },
  {
    title: 'Ruby',
    description: 'fsdfdsfdsfdssd',
    price: 5500,
    image: imgRuby
  }

]

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
              <button
                id={index + 1}
                onClick={() => addCart(item.title, item.image, item.price, item.description)}
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App




