import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Header from "./Header";

function HomePage() {
  return (<>
  <Header></Header>
    <section className="home" id="Home">
      <div className="sectionItems">
        <h3 >Hi, Myself</h3> 
        <h1>Shobhnath Chaurasiya</h1>
        <h3>And I'm a <span>Web Developer</span></h3>
        <p> I am 2<sup>nd</sup> year computer science & Engineering Student.I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever. Technologies and tools that I use to create such awesome websites. I have 1 Year experince as web developer as well Java Developer.</p>
        <div className="socialMeadia">
          <a href="https://www.instagram.com/_i_a_m_s_h_o_/" target="blank"><BsInstagram/></a>
          <a href="https://www.linkedin.com/in/shobhnath-chaurasiya-67251a224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="blank"><FaLinkedin/></a>
          <a href="https://github.com/chaurasiya01" target="blank"><FaGithub/></a>
        </div>
       <a href="./src/assets/Pdf/Resume99.pdf" download={"Resume"} className="btn">Download CV</a>
      </div>
      <div className="homeImg">
        <img src="./src/assets/images/ProfileGifDark.gif" alt="user" />
      </div>
    </section>
    </>
  );
}
export default HomePage;
