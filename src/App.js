import './App.css';
import React, { useEffect } from 'react'; 

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import News from './components/news';
import Options from './components/options';
import Help from './components/help';
import About from './components/about';
import Header from './loyaut/header';
 
import store from './redux/store'

   
function App() {

  store.subscribe(() => { 
    document.body.style.fontSize = store.getState()['fontSize'] + 'px'

    if (store.getState().theme === 'light')  document.body.className ='theme-light'
    else if (store.getState().theme === 'dark')  document.body.className ='theme-dark'
  })
 
  useEffect(()=>{ 
    store.dispatch({type: 'INIT_APPLICATION'})
  }, [])

  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/Options" element={<Options />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/About" element={<About />} /> 
      </Routes>

    </Router>
  );
}
 
export default App;
