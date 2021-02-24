import react, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {

  const brandName = ['Samsung', 'Nokia', 'Oppo'];
  const products = [
                     {name: 'Photoshop', price: '$100'},
                     {name: 'Illustrator', price: '$80.90'},
                     {name: 'PDF Reader', price: '$20'},
                     {name: 'Adobe XD', price: '$110'},
                     {name: 'Adobe Audition', price: '$65'},
                     {name: 'Adobe Premire Pro', price: '$150'},
                     {name: 'Adobe After Effect', price: '$250'}
                    ]
  
  const productName = brandName.map (product => product);
  console.log (productName);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>{productName[0]}</li>
          <li>{productName[1]}</li>
          <li>{productName[2]}</li>
        </ul>
        <ol>
           {
            products.map (product =>  <AdobeProduct product={product}> </AdobeProduct>)
           }
        </ol>
        <Users> </Users>
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
        <AdobeProduct product={products[2]}> </AdobeProduct>
        </div>
        <Counter></Counter>
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
    width:'250px',
    height: '250px',
    margin: '10px',
    border: '1px solid gray',
    borderRadius: '10px'
  }
  const {name, price} = props.product;
  return (<div style  = {productStyle}>
    <h3>{name}</h3>
    <h5>{price}</h5>
    <button>Buy now</button>
  </div>)
}

function Counter () {
  const [count, setCount] = useState (10);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (<div>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </div>)
}
function Users () {
  const [user, setUser] = useState([]);
  useEffect (() =>{
       fetch ('https://jsonplaceholder.typicode.com/users')
       .then (res => res.json())
       .then (data => setUser(data))
  },[]);
  return (
    <div>
      <h3>Dynamic users {user.length}</h3>
      {
        user.map (users => <p>{users.phone}</p> )
      }
    </div>
  )
}

export default App;
