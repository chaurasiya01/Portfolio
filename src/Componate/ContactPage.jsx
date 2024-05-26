 
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
function Contact(){
  return <>
  <div className="contact" id="contact">
  <h2>Contact Info.</h2>
  <div className="contact-items">
    <div className="contact-icon">
    <IoCallOutline className="contact-iconDesine"/>
    </div>
    <div className="contact-contant">
      <h3>Call Us</h3>
      <p>+91 6306412359</p>
    </div>
    <div className="contact-icon">
    <MdOutlineAttachEmail className="contact-iconDesine"></MdOutlineAttachEmail>
    </div>
    <div className="contact-contant">
      <h3>Email Us</h3>
      <p>shobhnathchaurasiy@gmail.com</p>
    </div>
  </div>
  <div className=" justify-content-center border-top">
      <p>© 2024 Imsho, Inc. All rights reserved.</p>
    </div>
 
  </div>

  
  </>
  
}
export default Contact;