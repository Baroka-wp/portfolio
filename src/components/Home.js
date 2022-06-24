import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/Image.png';
import myResume from '../files/Resume.pdf';

const Home = () => {
  const [about, setAbout] = useState(false);
  useEffect(() => {
    setAbout(false);
  }, []);
  return (
    <div className="hero">
      <div className="hero_detail">
        <h1 className="hero_name">Irotori Baroka</h1>
        {
          !about ? (
            <>
              <p>Software Engineer | Full Stack Web Developer | Entrepreneur | Founder</p>
              <div className="hero_action">
                <button type="button">
                  <a href={myResume} target="_blank" download rel="noreferrer">
                    Download my CV
                  </a>
                </button>
                <button
                  type="button"
                  onClick={() => setAbout(true)}
                >
                  About Me
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="hero_about">
                <p>
                  Multi-skilled web developer with hands-on experience in developing and
                  creating technology solutions for small businesses, using the Agile method
                  and focused on customer satisfaction.
                  <br />
                  <br />
                  During my 3 years of experience in
                  the web development field, I have gained extensive knowledge in

                  <ul>
                    <li>
                      Front-end development : ReactJS | VueJS | WordPress
                    </li>
                    <li>
                      Back-end development : NodeJS | ExpressJS | GraphQL |
                      Microservices | Ruby on Rails | Python | Numpy | Pandas
                    </li>
                    <li>
                      Databases : PostgresQL | MongoDB | Firebase Database
                    </li>
                    <li>
                      Machine learning development: TensorFlow | From Scratch
                    </li>
                    <li>
                      Stylization: Stylized Components | SASS | CSS-in-JS |
                      MaterialUI | Bootstrap | TailwindCSS
                    </li>
                    <li>
                      Product management : UI design | UX design | Wireframing
                    </li>
                    <li>
                      Infra : Netlify | Heroku
                    </li>
                  </ul>
                  <em>
                    Passionate about ideation, conceptualization, and teamwork,
                    Jaime particularly enjoys
                    taking on seemingly impossible challenges.
                    I&rsquo;m open to exploring exciting full
                    development opportunities in startups or large scale companies.
                    Take a look at
                    some of my work at https://github.com/Baroka-wp.
                    If you&rsquo;d like to get in contact about potential job
                    opportunities, please reach out!
                  </em>
                </p>
              </div>
              <div className="hero_action">
                <button type="button">
                  <a href={myResume} target="_blank" download rel="noreferrer">
                    Download my CV
                  </a>
                </button>
                <button type="button">
                  <Link to="/experiences">
                    My experience
                  </Link>
                </button>
              </div>
            </>
          )
        }
      </div>
      <img className="profilImage" src={image} alt="my profil" />
    </div>
  );
};

export default Home;
