import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {

  const brandName = ['Samsung', 'Nokia', 'Oppo'];
  const products = [
                     {name: 'Photoshop', price: '$100'},
                     {name: 'Illustrator', price: '$80.90'}
                    ]
  return (
    <div className="App">
      <header className="App-header">
        <Product brand= {brandName[0]} model="A 51" price="100 $" color="Blue"></Product>
        <Product brand= {brandName[1]} model="Lumia" price="150 $" color="Red"></Product>
        <Product brand= {brandName[2]} model="F 17" price="80 $" color="Pink"></Product>
        <div style={{marginTop: '50px', width: '60%'}}>
        <h1>Adobe Product</h1>
        <div style={{marginTop: '20px', display: 'grid',
                     gridTemplateColumns: '1fr 1fr 1fr',
                   }}>
        <AdobeProduct product={products[0]}> </AdobeProduct>
        <AdobeProduct product={products[1]}> </AdobeProduct>
        </div>
        
        </div>
        

      </header>
    </div>
  );
}
function Product (props) {
  const productStyle = { 
                         backgroundColor: 'lightgray', 
                         boxShadow: '5px 5px 10px black',
                         width:'300px',
                         margin: '10px',
                         float: 'left'
                       }
  return (<div style  = {productStyle}>
    <h3> {props.brand} </h3>
    <h4> {props.model} </h4>
    <p> {props.price} <br/> <span> Color: {props.color} </span></p>
  </div>)
}
//
function AdobeProduct (props) {
  const productStyle = { 
    backgroundColor: 'white', 
    color: 'black',
    boxShadow: '5px 5px 10px black',
    width:'200px',
    height: '200px',
    margin: '10px',
    border: '1px solid gray',
    borderRadius: '10px'
  }
  const {name, price} = props.product;
  console.log (props.product.price);
  return (<div style  = {productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy now</button>
  </div>)
}

export default App;
