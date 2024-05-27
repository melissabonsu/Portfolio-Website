import "./Navbar.css"
import Sidebar from "../Sidebar/Sidebar.jsx"
import {motion} from "framer-motion"

function Navbar() {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                    initial={{opacity:0, scale:0.5}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration:0.5}}>
                    <a href="#"><img src="images/name_logo.png" alt=""></img></a>
                </motion.span>
                <div className="social">
                    <a href="#"><img src="images/linkedin.png" alt=""/></a>
                    <a href="#"><img src="images/github.png" alt=""/></a>
                    <a href="#"><img src="images/illinois.png" alt=""/></a>
                    <a href="#"><img src="images/resume.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
  }

  export default Navbar