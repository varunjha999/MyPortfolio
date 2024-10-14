import React from 'react';
import  './App.css';
import Project from './components/Projects';
import Tech from './components/Tech';
import Footer from './components/Footer'
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import { BrowserRouter } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import {FaBlogger} from 'react-icons/fa';
import {GoProject} from 'react-icons/go';
import {FaProjectDiagram} from 'react-icons/fa';



function App() {
  
  return (
   <BrowserRouter>
    <div className="header">
      <div className='navbar'>
      <div className="menu">
        <div className="portfolio">Portfolio.</div>
        <div  className="nav">
          <div className="nav-projects"><Link to="#project" smooth={true} >
            <GoProject  size='1.4rem' color='white' className="navbar-icon" />
            Projects</Link></div>
          <div className="nav-tech"> <Link to='#tech' smooth={true} >
            <FaProjectDiagram size='1.4rem' color='white' className="navbar-icon" />
                Technologies
            </Link>  </div>
          <div className="nav-social"> <a href="https://jhavarun999.hashnode.dev/" target='_blank' className='blog' rel="noreferrer">
          <FaBlogger  size='1.4rem' color='white' className="navbar-icon" />
            Blogs</a></div>
           </div>
        <div className="icons">
        <a href="https://github.com/varunjha999" target='_blank' rel="noreferrer"><AiFillGithub size='1.7rem' color='white' /></a>
        
        <a href="https://twitter.com/varunjh42493046" target='_blank' rel="noreferrer"><BsTwitter size='1.7rem' color='white' /></a>
        <a href="https://www.linkedin.com/in/jhavarun999/" target='_blank' rel="noreferrer" ><BsLinkedin size='1.7rem' color='white' /></a>
        
        </div>
        
      </div>
     <div className='hero'>
      <div className='mid'>
        <div className='heading'> <span className="highlighting">Hello, I'm Varun Jha ,  </span>
            Software Developer.
        </div>
        <div className='about'>
        "Software developer with more two year of hands-on experience.
         Proficient in creating user-friendly interfaces and building functional web 
         applications. Enthusiastic about learning and applying new technologies to 
         contribute effectively to development projects."
        </div>
        <div >
          <form className='mygithub'><button formAction='https://github.com/varunjha999' formTarget='_blank'>GitHub Profile</button></form>
          
        </div>
      </div> 
      
       <div className='circle'>
      <div className='circles'></div>
        <div className='circle-one'></div>
        <div className="circle-two"></div>
      
      </div>
      
      </div>
      </div> 
      <div> < Project /></div>
      <div><Tech /></div>
      <div><Footer/></div>
     
       
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
