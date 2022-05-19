import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import  useScroll  from '../components/useScroll';
import { motion } from 'framer-motion';
import { navAnimations } from '../animation';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const[element, controls] = useScroll();
  return (
    <Nav ref={element}
      variants={navAnimations}
      transition={{delay:0.1}}
      animate={controls}
    >
      <div className='brand_container'>
        <a href='#' className='brand'>
          <img src={logo} alt='logo'/>
        </a>  
        <div className='toggle'></div>
      </div>  
      <div className="links">
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Портфолио</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

export default Navbar;

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 12rem;
  color: #fff;
  .brand__container {
    margin: 0 2 rem;
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
        }
      }
    }
  }
`;