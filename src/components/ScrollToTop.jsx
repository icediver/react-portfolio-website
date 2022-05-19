import React, {useState} from 'react';
import styled from 'styled-components';
import {FaChevronUp} from 'react-icons/fa'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <Div>
      <a href='#' className={`${visible ? "block" : "none"}`}>
        <FaChevronUp/>
      </a>
    </Div>
  )
}

export default ScrollToTop;

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s easy-in-out;
    z-index: 1;
    svg {
      color: white;
      font-size: 1.3rem;
    }
  }
`;
