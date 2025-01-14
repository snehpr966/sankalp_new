import {Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/common/header/Header"

import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"

import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
function App() {
  return (
    <div className="App">
    <Header />
       <Routes>
       
           <Route path='/' element={<Home />} /> 
           <Route  path='/about' element={<About />} />
          <Route  path='/courses' element={<CourseHome />} />
          <Route path='/team' element={<Team />} />
          
          <Route path='/journal' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        
      </Routes>  
     <Footer />
     </div>
  )
}

export default App
