
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils.js/particles";

import './App.css';
 import './index.css';
// import 'primeicons/primeicons.css';
// import {User} from "./loginform/User";

import Navbar from './component/Portfolio/Navbar/Navbar';
import About from './component/Portfolio/About/About';
import Contact from './component/Portfolio/Contact/Contact'
import Home from './component/Portfolio/Home/Home';
import Skills from './component/Portfolio/Skills/Skills';
import Resume from './component/Portfolio/Resume/Resume';
// import Style from './portfolio.module.css'
function App() {

  const handleInit = async (main) => {
    // console.log('Initialization completed:', main);
    await loadFull(main);
  };
  return (
    <>


      <BrowserRouter>
      <Particles id="particles" options={particles} init={handleInit} />
      <Navbar></Navbar>
        <Routes>

        <Route index path='/' element={<Home/>}/>
      
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
