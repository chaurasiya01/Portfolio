import { useState } from "react";

function Header(){
  let[SelectedTab,setSelectedTab]=useState("Home");
  return <>
   <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a href="#Home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none logo">
        <span className="fs-4">Portfolio.</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item" onClick={()=>setSelectedTab("Home")}><a href="#Home" className={`nav-link ${SelectedTab==="Home"&& "active"}`}  aria-current="page">Home</a></li>
        <li className="nav-item" onClick={()=>setSelectedTab("About")}><a href="#About" className={`nav-link ${SelectedTab==="About"&&"active"}`}>About</a></li>
        {/* <li className="nav-item"onClick={()=>setSelectedTab("Service")}><a href="#" className={`nav-link ${SelectedTab==="Service"&&"active"}`}>Service</a></li> */}
        <li className="nav-item"onClick={()=>setSelectedTab("Protfolio")}><a href="#portfolio" className={`nav-link ${SelectedTab==="Protfolio"&&"active"}`}>Protfolio</a></li>
        <li className="nav-item"onClick={()=>setSelectedTab("Contact")}><a href="#contact" className={`nav-link ${SelectedTab==="Contact"&&"active"}`}>Contact</a></li>
      </ul>
    </header>

  </>

}
export default Header;