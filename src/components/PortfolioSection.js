import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="mt-4">
      <h2>Portfolio</h2>
      <div className="project">
        <h3>Personal Website</h3>
        <p>
          Developed a responsive personal website showcasing my portfolio and
          skills using HTML, CSS, and JavaScript.{' '}
          <a
            href="https://portfolio-rho-lyart-62.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </p>
      </div>

      <div className="project">
        <h3>3 page Resto web page</h3>
        <p>
          Created a 3 page Resto website with a user-friendly interface using
          HTML, CSS, JavaScript, and Bootstrap for the front-end and for back-end
          using Express js and Node js{' '}
          <a
            href="https://mereo83.github.io/Resto/"
            target="_blank"
            rel="noreferrer"
          >
            RESTO
          </a>
        </p>
      </div>

      <div className="project">
        <h3>Back-End for Classified App</h3>
        <p>
          Designed a Back-End for a classified app using Express js and Node js,
          for database I used MYSQL.{' '}
          <a
            href="https://github.com/mereo83/Classified-Page.git"
            target="_blank"
            rel="noreferrer"
          >
            Glassified-Page
          </a>
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;
