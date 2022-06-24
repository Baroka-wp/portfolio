import React from 'react';
import { FaAngellist } from 'react-icons/fa';
import {
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
  AiFillGithub,
} from 'react-icons/ai';

const Footer = () => (
  <footer>
    <p>&copy; Baroka Portfoliio | 2022</p>
    <p>
      <a href="https://www.linkedin.com/in/baroka/" target="_blank" rel="noreferrer">
        <AiFillLinkedin />
      </a>
    </p>
    <p>
      <a href="https://medium.com/@birotori" target="_blank" rel="noreferrer">
        <AiFillMediumCircle />
      </a>
    </p>
    <p>
      <a href="https://twitter.com/IrotoriB" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle />
      </a>
    </p>
    <p>
      <a href="https://angel.co/u/irotori-baroka" target="_blank" rel="noreferrer">
        <FaAngellist />
      </a>
    </p>
    <p>
      <a href="https://github.com/Baroka-wp" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
    </p>
  </footer>
);

export default Footer;
