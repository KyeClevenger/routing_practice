// collabortated with amthony, eric, viviana, daisy, christian, richard, josh

import logo from './logo.svg';
import {Route, Routes, useParams} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Value from './views/Value';
import Color from './views/Color';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/Home' element={<Home/>}/>
        <Route path = '/:value' element={<Value/>}/>
        <Route path = '/:text/:color/:color2' element={<Color/>}/>
      </Routes>
    </div>
  );
}

export default App;
