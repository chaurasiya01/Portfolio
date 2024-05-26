import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaJava,FaBootstrap} from "react-icons/fa";
import { BiSolidFileHtml,BiSolidFileCss } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { PiTreeStructureBold } from "react-icons/pi";
 

 

function AboutPage() {
  return (
    <section className="about" id="About">
     <div className="about-img">
      <img src="./src/assets/coder.svg" alt="svg" />
     </div>
     <div className="about-contant">
      <h2 className="headingAbout">ABOUT <span>ME</span></h2>
      <h3>Web Developer</h3>
      <p>A Fronted-end developer with one years of experience in Web  development having good  knowledge of(Html, Css, JavaScript, React.js) and
        Experienced in developing Restful APIs and Web Services using Spring Boot.</p>
      <ul className="skills">
        <li>#java <FaJava className="list-icons"/></li>
        <li>#javaScript<RiJavascriptFill className="list-icons"/></li>
        <li>#html <BiSolidFileHtml className="list-icons"/></li>
        <li>#css <BiSolidFileCss className="list-icons"/></li>
        <li>#react.js <RiReactjsLine className="list-icons"/></li>
        <li>#spring boot <SiSpringboot className="list-icons"/></li>
        <li>#dsa <PiTreeStructureBold className="list-icons"/></li>
        <li>#bootstrap <FaBootstrap className="list-icons"/></li>
        <li>#github <FaGithub className="list-icons"/></li>

      </ul>
     </div>
    </section>
  );
}
export default AboutPage;
