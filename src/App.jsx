import React from 'react'
import "./App.css"
import Home from './components/home/Home'
import {  Route, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import Software from './components/Software/Software';
import Industries from './components/Industries/Industries';
import NavigationBar from './components/navbar/navbar';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/blog" element={<Blog />} />
                <Route path="/services" element={<Services />} />
                <Route path="/software" element={< Software />}  exact />

                <Route path="/industries" element={<Industries />} exact />

      </Routes>
    </div>
  )
}

export default App
