import React from 'react'
import ReactDOM from 'react-dom';

import './Footer.css'
import { Link } from 'react-router-dom';
import { faFontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faYoutube, faTiktok} from '@fortawesome/free-brands-svg-icons';
/*
Footer.js is a component that is utilized by every subpage within NebulaNet as it contains the information regarding the site and its
creation. It helps with creating a offical look to the site and gives each page a visual end object so the user can be sure that
they have reached the end of the webpage and have viewed all of its content
 */
function Footer() {
  return (
    <>
    <div className='footer-container'>
        <div className='extra'>
            ‘To know Mother Nature, is to love her smallest creations’ -Takashi Amano

        </div>
        <div class='footer-logo'>
            <Link to='/' className="navbar-logo" >
              ScaperLab
            </Link>
        </div>
        <small class='website-rights'>ScaperLab © 2024</small>
    </div>
    </>
  )
}

export default Footer
