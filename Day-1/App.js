import logo from './logo.svg';
import './App.css';
import Message from './Components/Message';
import Welcome from './Components/Welcome';
import Demo from './Components/Demo';
import Product from './Components/Product';
import Students from './Components/Students';
import Login from './Components/Login';
import Counter from './Components/Counter';

function App() {
  return (
     <div>
        {/* <Message/>
        <Welcome/> */}
        {/* <Demo/> */}

        {/* <Product name="Iphone 13 Mini" price="69000"/>
        <Product name="Iphone 13" price="99000"/>
        <Product name="Samsung S20" price="79000"/>
        <Product name="Dell Insporon 3515" price="32500">
          <p>Category: Electronics/Laptops</p>
        </Product> */}

        {/* <Students name="kamal" age="26"/>
        <Students name="John" age="22"/>
        <Students name="Krishna" age="24">
          <h3>University: JNTU</h3>
        </Students> */}

       {/* <Login/> */}
       <Counter/>

     </div>
  );
}

export default App;
