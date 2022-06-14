import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewsPage from './routes/NewsPage'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<NewsPage/>}/>
        <Route path = "/:category" element = {<NewsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
  
  
}

export default App;
