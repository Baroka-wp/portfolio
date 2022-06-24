import React from 'react';
import experiences from '../store/experiences';
import vector from '../images/Vector 1.png';
import logo1 from '../images/microverse.png';
import logo2 from '../images/logo-ASC.png';
import logo3 from '../images/dic_logo.png';

const Experiences = () => {
  const expLogo = (compagny) => {
    switch (compagny) {
      case 'Microverse':
        return logo1;
      case 'DIVE INTO CODE':
        return logo3;
      case 'AFRICA SAMURAI':
        return logo2;
      default:
        return vector;
    }
  };

  return (
    <div className="experience">
      {
        experiences.map((e) => (
          <div key={e.company} className="exp_1 exp_card">
            <img className="exp_img" src={expLogo(e.company)} alt="exp_image" />
            <div className="exp_details">
              <h3>{e.company}</h3>
              <p>{e.position}</p>
              <small>{e.years}</small>
              <ul>
                {
                  e.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Experiences;
