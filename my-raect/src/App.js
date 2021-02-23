import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';

function App() {
  const phone = {brand: "Samsung", model: "A 51", color: "Blue", prise: 27000}
  const brandName = ['Samsung', 'Nokia', 'Oppo']
  const style = {
    color: 'yellow',
    boxShadow: '5px 5px 10px black',
    padding: '5px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{phone.brand}</h3>
        <h4>{phone.model}</h4>
        <p style={{color: 'blue', backgroundColor: "white"}}>{phone.prise}</p>
        <p style= {style}>{phone.color}</p>
        <Product brand= {brandName[0]} model="A 51" prise="100 $" color="Blue"></Product>
        <Product brand= {brandName[1]} model="Lumia" prise="150 $" color="Red"></Product>
        <Product brand= {brandName[2]} model="F 17" prise="80 $" color="Pink"></Product>
      </header>
    </div>
  );
}
function Product (props) {
  console.log (props);
  return (<div style  ={{
                         backgroundColor: 'blue', 
                         boxShadow: '5px 5px 10px black',
                         width:'300px',
                         margin: '10px'
                      }}>
    <h3> {props.brand} </h3>
    <h4> {props.model} </h4>
    <p> {props.prise} <br/> <span> Color: {props.color} </span></p>
  </div>)
}

export default App;
