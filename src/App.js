import React from 'react';
import './script.js';
import { Carousel } from 'react-bootstrap';

function App(){
<<<<<<< HEAD
=======
  const sayHello = () =>{
    console.log('hello');
  }
>>>>>>> 564bfeb3e601b22ef827f0fb8265a9c24dce0880
  return(
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="nature1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Sunset</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="nature2.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Green land</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="nature3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Hills</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}
export default App;
