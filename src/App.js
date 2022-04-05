import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Dasboard from './Components/Dasboard/Dasboard';


import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

import NotFound from './Components/NotFound/NotFound';
import Revews from './Components/Revews/Revews';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/revews" element={<Revews></Revews>}></Route>
        <Route path="/dasboard" element={<Dasboard></Dasboard>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;