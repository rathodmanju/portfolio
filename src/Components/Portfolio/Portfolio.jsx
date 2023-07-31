import React from "react";
import "./Portfolio.css";
import HTMLCSS from "../../Assets/html css.png";
import JAVASCRIPT from "../../Assets/js.png";
import REACT from "../../Assets/react jss.png";
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={HTMLCSS} alt="" />
          </div>

          <h3>Tesla</h3>

          <div className="portfolio-item-cta">
            <a href="https://github.com/rathodmanju/tesla" className="btn" target="_blank">GitHub</a>
            <a href="https://rathodmanju.github.io/tesla/Tesla.html"  className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={HTMLCSS} alt="" />
          </div>

          <h3>Zendesk</h3>

          <div className="portfolio-item-cta">
            <a href="https://github.com/rathodmanju/mock" className="btn" target="_blank">GitHub</a>
            <a href="https://rathodmanju.github.io/mock/mock.html"  className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={JAVASCRIPT} alt="" />
          </div>

          <h3>Weather App</h3>

          <div className="portfolio-item-cta">
            <a href="https://github.com/rathodmanju/weather" className="btn" target="_blank">GitHub</a>
            <a href="https://rathodmanju.github.io/weather/weather.html"  className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={JAVASCRIPT} alt="" />
          </div>

          <h3>Calculator</h3>

          <div className="portfolio-item-cta">
            <a href="https://github.com/rathodmanju/calculator" className="btn" target="_blank">GitHub</a>
            <a href="https://rathodmanju.github.io/calculator/Calculator.html"  className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={REACT} alt="" />
          </div>

          <h3>Library Management</h3>

          <div className="portfolio-item-cta">
            <a href="https://github.com/rathodmanju/Library-Manager-Syastem" className="btn" target="_blank">GitHub</a>
            <a href="https://github.com/rathodmanju/Library-Manager-Syastem"  className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={REACT} alt="" />
          </div>

          <h3>My Portfolio</h3>

          <div className="portfolio-item-cta">
            <a href="https://github.com/rathodmanju/portfolio" className="btn" target="_blank">GitHub</a>
            <a href="https://rathodmanju.github.io/portfolio/"  className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
