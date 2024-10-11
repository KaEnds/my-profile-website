import "./Navbar.css"
import { motion} from 'framer-motion'
import { useState, useRef, useEffect } from "react"


function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const sliderRef = useRef(null)
  const buttonRef = useRef(null);

  const toggleClass = () => {
      setIsActive(!isActive);
  }

  const handleClickOutside = (event) => {
    if (
      sliderRef.current && 
      !sliderRef.current.contains(event.target) && 
      buttonRef.current && 
      !buttonRef.current.contains(event.target)
    ) {
      setIsActive(false);
  };
  }

  // Add the event listener when the component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="nav-container d-flex justify-content-between align-items-center">
        <div className="logo fw-light"><span className="fw-semibold">K</span>eniz</div>
        <div className="navigator">
          <a href="/">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#art-gallary">Art gallary</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <motion.a href="" whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} className="th-en">
            TH/EN
          </motion.a>
          <div className={`hamburger toggle-btn ${isActive ? 'active' : ''}`} onClick={toggleClass} ref={buttonRef}>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`slider-nav ${isActive ? 'active' : ''}`}  ref={sliderRef}>
        <div className="navigator">
          <a href="/">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#art-gallary">Art gallary</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
