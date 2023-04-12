import './App.css';
import ErrorHandlerComponent from './Components/ErrorHandlerComponent';
import FRParent from './Components/FRParent';
import PortalsDemo from './Components/PortalsDemo';
import ProductsComponent from './Components/ProductsComponent';
import PureCompoentDemo from './Components/PureCompoentDemo';
import RefsDemo from './Components/RefsDemo';
import RegularComponent from './Components/RegularComponent';
import TableComponent from './Components/TableComponent';

function App() {
  return (
     <div>
      <ErrorHandlerComponent>
      <ProductsComponent name="Iphone 14" category="Electronics"/>
      </ErrorHandlerComponent>

      <ErrorHandlerComponent>
      <ProductsComponent name="Samsung S20" category="Electronics"/>
      </ErrorHandlerComponent>

      <ErrorHandlerComponent>
      <ProductsComponent name="BMW" category="Automobiles"/>
      </ErrorHandlerComponent>
      
     </div>
  );
}

export default App;
