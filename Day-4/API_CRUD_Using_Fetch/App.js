import logo from './logo.svg';
import './App.css';
import IndexComponent from './Components/IndexComponent';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Add from './Components/Add';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
        <Router>
           <Routes>
            <Route path='/' element={<IndexComponent/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
            <Route path='/delete/:id' element={<Delete/>}></Route>
           </Routes>
        </Router>
    </div>
  );
}

export default App;
