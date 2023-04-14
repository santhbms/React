import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import Store from './Components/Store';
import {Provider} from 'react-redux'

function App() {
  return (
    <div>
      <Provider store={Store}>
      <Demo/>      
      
      </Provider>
    </div>
  );
}

export default App;
