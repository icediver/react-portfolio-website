import React from 'react';
import styled from "styled-components";
import { BsBehance, BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import useScroll from './useScroll';
import { motion } from 'framer-motion';
import { footerLogoAnimations, footerTextAnimations } from '../animation';


const Footer = () => {
  const [element, controls] = useScroll();
  return (
    <Foot
      ref={element}
      variants={footerTextAnimations}
      animate={controls}
      transition={{ delay: 0.03, type: 'tween', duration: 0.8 }}>
      <span>&copy; Template created with love by Kishan Sheth</span>
      <motion.div
        className="footer__social__icons"
        animate={controls}
        variants={footerLogoAnimations}
        transition={{
          delay: 0.02,
          type: 'tween',
          duration: 0.8,
        }}>
        <BsBehance />
        <BsTwitter />
        <BsFacebook />
        <BsYoutube />
      </motion.div>
    </Foot>
  );
}

export default Footer;

const Foot = styled(motion.footer)`
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10rem;
  .footer__social__icons {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    padding: 1rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;