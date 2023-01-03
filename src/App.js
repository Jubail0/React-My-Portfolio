import React from 'react'
import './App.scss'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

const App = () => {
    const[toggle,setToggle]=React.useState(false)

    return (
        <div style={{backgroundColor:toggle?'#1B1B1B':''}}>
            <Header/>
            <Navbar setToggle = {setToggle}/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App;
