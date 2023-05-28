import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'
import GlobalStyles from './Global'


function App() {
  
  return (  
   <div>
    <GlobalStyles/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/APropos/" element={<APropos />} />
            <Route path="/FicheLogement/:id" element={<FicheLogement />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
        </div>
      
  )
}


export default App;
