import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
      <div className="home__socials">
        <a
          href="https://github.com/VasuChanchapara"
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/vasuchanchapara/"
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.facebook.com/vasu.chanchapara.3"
          className="home__social-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
    );
};

export default HeaderSocials;
