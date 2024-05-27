import './App.css'
import Navbar from '../src/components/Navbar/Navbar.jsx'
import React from 'react';

function App() {
  return <div>
    <section id = "Home"><Navbar/></section>
    <section id = "About Me">About Me</section>
    <section id = "Experiences">Experiences</section>
    <section id = "Projects">Projects</section>
    <section id = "Contact Me!">Contact Me!</section>
  </div>
}

export default App
