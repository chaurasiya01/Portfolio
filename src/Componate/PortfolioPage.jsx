import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaJava, FaBootstrap } from "react-icons/fa";
import { BiSolidFileHtml, BiSolidFileCss } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { PiTreeStructureBold } from "react-icons/pi";
import ImageSlider, { ImageSlider1, ImageSlider2, ImageSlider3 } from "./ImageSlider";

function Portfolio() {
  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="portfolio-contant-h2">
          <h2 className="headingPortfolio">Projects</h2>
        </div>
        <div className="portfolio-div">
          <div className="portfolio-contant">
            {/* <h2 className="headingPortfolio">ABOUT <span>ME</span></h2> */}
            <h3>Quiz Website </h3>
            <p>
            This project was an Quiz Website.In this project  first a login page.
            If user visit  first time  on the website,then user will  create an account , after  creating account user can login 
            whenever he want and user detail store in data base. After login user can play Quiz.
            The technologies and tools used in this project are  Html, Css, JavaScript, Spring boot Rest Api , Database .
            </p>
            <ul className="skills-portfolio">
              <li>
                #java <FaJava className="list-icons-portfolio" />
              </li>
              <li>
                #javaScript
                <RiJavascriptFill className="list-icons-portfolio" />
              </li>
              <li>
                #html <BiSolidFileHtml className="list-icons-portfolio" />
              </li>
              <li>
                #css <BiSolidFileCss className="list-icons-portfolio" />
              </li>
              <li>
                #spring boot Rest Api <SiSpringboot className="list-icons-portfolio" />
              </li>
            </ul>
          </div>

          <div className="portfolio-img">
            {/* <img src="./src/assets/coder.svg" alt="svg" /> */}
            <div className="imgSl">
            <ImageSlider></ImageSlider>
            </div>
            
          </div>
        </div>

        <div className="portfolio-div">
          <div className="portfolio-img">
           <div className="imgSl">
            <ImageSlider1></ImageSlider1>
            </div>
          </div>
          <div className="portfolio-contant">
            <h3>Myntra Clone</h3>
            <p>
            This project was Myntra Clone.If user click on add to cart button then item add into cart.
            The technologies and tools used in this project are  Html, Css, JavaScript.
            </p>
            <ul className="skills-portfolio">
          
              <li>
                #javaScript
                <RiJavascriptFill className="list-icons-portfolio" />
              </li>
              <li>
                #html <BiSolidFileHtml className="list-icons-portfolio" />
              </li>
              <li>
                #css <BiSolidFileCss className="list-icons-portfolio" />
              </li>
            </ul>
          </div>
        </div>
        <div className="portfolio-div">
          <div className="portfolio-contant">
            <h3>Calculater</h3>
            <p>
            This project was an simple Calculater.The technologies and tools used in this project are  Html, Css, JavaScript  React.js.
            </p>
            <ul className="skills-portfolio">
              <li>
                #javaScript
                <RiJavascriptFill className="list-icons-portfolio" />
              </li>
              <li>
                #html <BiSolidFileHtml className="list-icons-portfolio" />
              </li>
              <li>
                #css <BiSolidFileCss className="list-icons-portfolio" />
              </li>
              <li>
                #react.js <RiReactjsLine className="list-icons-portfolio" />
              </li>
            </ul>
          </div>
          <div className="portfolio-img">
           <div className="imgSl">
            <ImageSlider2></ImageSlider2>
            </div>
          </div>
        </div>
        <div className="portfolio-div">
          <div className="portfolio-img">
           <div className="imgSl">
            <ImageSlider3></ImageSlider3>
            </div>
          </div>
          <div className="portfolio-contant">
            <h3>Food Website</h3>
            <p>
            This project was Food Website.The technologies and tools used in this project are  Html, Css, JavaScript, React.js.
            </p>
            <ul className="skills-portfolio">
              
              <li>
                #javaScript
                <RiJavascriptFill className="list-icons-portfolio" />
              </li>
              <li>
                #html <BiSolidFileHtml className="list-icons-portfolio" />
              </li>
              <li>
                #css <BiSolidFileCss className="list-icons-portfolio" />
              </li>
              <li>
                #react.js <RiReactjsLine className="list-icons-portfolio" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Portfolio;
