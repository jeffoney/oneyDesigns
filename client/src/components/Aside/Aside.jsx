import React from 'react';
import Fade from 'react-reveal/Fade';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import './Aside.scss';

import ImageOne from '../../assets/images/art/main.jpg'
import ImageTwo from '../../assets/images/design/final-project-00.jpg'
import ImageThree from '../../assets/images/development/creu-04.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

const slideImages = [
  ImageOne,
  ImageTwo,
  ImageThree
];

const Aside = ({ aboutInfo }) => {
  return (
    <aside className="sidebar">
      <section className="sidebar__description">
          <section className="slider">
              <h1 className="slider__header">I am a Full-stack JavaScript Developer, Designer and Illustrator</h1>
              {/* <article>
                <Link to="/about">
                  <button>View My Profile</button>
                </Link>
                <Link to="/">
                  <button>View Projects</button>
                </Link>
              </article> */}
        </section>
        <Fade right>
          <section className="sidebar__description">
            <p className="sidebar__description__p sidebar__description__p--salt">{aboutInfo.salt}</p>
            <article className="sidebar__links">
              <a href="https://www.linkedin.com/in/ninnihagstrom/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="https://github.com/ninnih" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>             
            </article>
          </section>
        </Fade>
      </section>
    </aside>
  );
}

export default Aside;