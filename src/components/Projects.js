import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import globalimage from '../images/globalEduc.jpeg';
import cubisImage from '../images/cubisImage.png';
import angelHelp from '../images/angelHelp.png';
import rubyProject from '../images/rubyProject.png';

const Projects = () => (
  <div className="project">
    <div className="project_card">
      <img className="project_img" src={globalimage} alt="project_img" />
      <div className="project_detail">
        <h3>Global Samurai (Sass Project)</h3>
        <p>
          Full Stack Developer ·
          | Create Africa Samurai website to present their activities.
          | Make contact form as popup- Use Sass for styling
          | Thanks to this project, I was able to master Sass and deepen my skills in JavaScript
        </p>
        <div className="project_links">
          <a href="https://baroka-wp.github.io/GlobalSamurai/">
            <p>
              <AiFillGithub />
              &nbsp;source code
            </p>
          </a>
          <a href="https://baroka-wp.github.io/GlobalSamurai/"><p>Live demo</p></a>
        </div>
      </div>
    </div>
    <div className="project_card">
      <img className="project_img" src={cubisImage} alt="project_img" />
      <div className="project_detail">
        <h3>Cubis (Pure JavaScript Project)</h3>
        <p>
          Full Stack Developer ·
          An application that allows you to find meal ideas
          that you can make simply with the ingredients you have.
          Developed with an external API,
          in the JavaScript language. We used development tools like Kanban,
          webpack and Jest-test.
        </p>
        <div className="project_links">
          <a href="https://github.com/Baroka-wp/cubis">
            <p>
              <AiFillGithub />
              &nbsp;source code
            </p>
          </a>
          <a href="https://jolly-otter-7d885a.netlify.app/#"><p>Live demo</p></a>
        </div>
      </div>
    </div>
    <div className="project_card">
      <img className="project_img" src={angelHelp} alt="project_img" />
      <div className="project_detail">
        <h3>Angel Help (React Project)</h3>
        <p>
          Full Stack Developer ·
          Build an application that allows the user to find which angel
          to pray to for help in a particular area of their life. Health, Love,
          Money, Employment, Proction and spirituality.
          Build with React | Redux | MongoDB | Express API
        </p>
        <div className="project_links">
          <a href="https://github.com/Baroka-wp/angels-help">
            <p>
              <AiFillGithub />
              &nbsp;source code
            </p>
          </a>
          <a href="https://baroka-wp.github.io/angels-help/"><p>Live demo</p></a>
        </div>
      </div>
    </div>
    <div className="project_card">
      <img className="project_img" src={rubyProject} alt="project_img" />
      <div className="project_detail">
        <h3>Up Link | Bishop (RoR Project)</h3>
        <p>
          Full Stack Developer ·
          Create a directory of startups in Benin
          | Create networking features for Startups
          | Deploy on Heroku
          | Build with Ruby on Rails
        </p>
        <div className="project_links">
          <a href="https://github.com/Baroka-wp/bishops">
            <p>
              <AiFillGithub />
              &nbsp;source code
            </p>
          </a>
          <a href="https://bishop-samurai.herokuapp.com/"><p>Live demo</p></a>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
