import React from 'react';
import {
  FaAngellist,
  FaWhatsappSquare,
} from 'react-icons/fa';
import {
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineMail,
} from 'react-icons/ai';

const Contact = () => (
  <div className="contact">
    <p>
      <AiOutlineMail />
      <a href="mailto:birotori@gmail.com">birotori@gmail.com</a>
    </p>
    <p>
      <FaWhatsappSquare />
      +229 67 15 39 74
    </p>
    <p>Time zone : UTC + 1</p>
    <div className="contact_icone">
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
    </div>
  </div>
);

export default Contact;
