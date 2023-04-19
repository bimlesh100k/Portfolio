// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Social_icons from "./components/Social_icons";
import Portfolio from "./components/portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact"
import Scroll_bar from "./components/Scroll-bar";
function App() {
 return(
<>
<Navbar/>
<Home/>
<Scroll_bar/>
<Social_icons/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>
</>
 )
}

export default App
