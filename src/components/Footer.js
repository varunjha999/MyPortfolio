import React from "react";
import './Footer.css';
import {AiFillGithub} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


const Footer = () => {
  return (
    <div className="final">
      <div className="last">
            <div className="free"> Feel Free to contact me</div>
            <div className="last-two">
            
            <a target="_blank"
                className="email"
                href="mailto:jhavarun999@gmail.com?
        &subject=Feedback from Simplilearn Support Team
        &body=Add what you want to suggest"  rel="noreferrer"
            >
               jhavarun999@gmail.com
            </a>
            </div>

            <div className="my">
            <a href="https://github.com/varunjha999" target='_blank ' rel="noreferrer"><AiFillGithub size='1.5rem' color='white' /></a>
        
        <a href="https://twitter.com/varunjh42493046" target='_blank' rel="noreferrer"><BsTwitter size='1.5rem' color='white' /></a>
        <a href="https://www.linkedin.com/in/jhavarun999/" target='_blank' rel="noreferrer" ><BsLinkedin size='1.5rem' color='white' /></a>
            </div>

      </div>
      <section>
        <div className="curve" ></div>
        </section>
      
    </div>
  );
};

export default Footer;
