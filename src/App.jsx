/* eslint-disable react/no-unescaped-entities */
import './App.css'
import Navbar from './components/Navbar'
import { motion, useScroll, useSpring  } from 'framer-motion'
import { useState, useEffect, useRef } from 'react';
import { Fade, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LazyLoad from 'react-lazyload';

import mypicture from '././assets/mypicture.png'


import Mouse from './mouse';
import html from '../public/icon/html.svg'
import css from '../public/icon/css.svg'
import js from '../public/icon/js.svg'
import react from '../public/icon/react.svg'
import laravel from '../public/icon/laravel.svg'
import tailwind from '../public/icon/tailwind.svg'
import java from '../public/icon/java.svg'
import python from '../public/icon/python.svg'
import daisyui from '../public/icon/daisyui.svg'
import mysql from '../public/icon/mysql.svg'
import adobe from '../public/icon/adobe.svg'
import Illustrator from '../public/icon/Illustrator.svg'
import procreate from '../public/icon/procreate.svg'
import figma from '../public/icon/figma.svg'

import Contact from './components/Contact';




gsap.registerPlugin(ScrollTrigger);

const text_up = keyframes`
  from {
    transform: translate(0,100%);
    }
    
  to {
    transform: translate(0,0);
  }
`;



function App() {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  const [cw, setCW] = useState();
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const imagesToLoad = 7; // Number of images to be loaded
  const [loadedImages, setLoadedImages] = useState(0);
  const [showImages, setShowImages] = useState(false);
  
  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  const updateWidth = () => {
    if (containerRef.current) {
      setCW(containerRef.current.getBoundingClientRect().width);
    }
  };

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const container = containerRef.current;
    let ww = window.innerWidth

    updateWidth();
    window.addEventListener('reload', updateWidth);
    // imagesToPreload.forEach((url) => preloadImage(url));

    const imageLoadDelay = setTimeout(() => {
      setShowImages(true);
    }, 2000); // 2-second delay for demo purposes

    if (loadedImages === imagesToLoad) {
      setAllImagesLoaded(true);
    }

    if (cw > 0) {

      gsap.set(".canvas", {  xPercent: -50, yPercent: -50, x: 0, y: 0})

      gsap.to(".canvas1", {filter: 'blur(0px)', opacity:1 ,x: `${((-cw/3.3) / ww) * 100}vw`, y: `${((-cw/10) / ww) * 100}vw`,ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1,}});
      gsap.to(".canvas2", {filter: 'blur(0px)', opacity:1,x: `${((-cw/40) / ww) * 100}vw`, y: `${((-cw/5.5) / ww) * 100}vw`, ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1, }});
      gsap.to(".canvas3", {filter: 'blur(0px)', opacity:1,x: `${((-cw/1000) / ww) * 100}vw`, y: `${((cw/6) / ww) * 100}vw`,ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1, }});
      gsap.to(".canvas4", {filter: 'blur(0px)', opacity:1,x: `${((cw/4.5) / ww) * 100}vw`, y: `${((cw/18) / ww) * 100}vw`,  ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1, }});
      gsap.to(".canvas5", {filter: 'blur(0px)', opacity:1,x: `${(-(cw/4.4) / ww) * 100}vw`, y: `${((cw/4.3) / ww) * 100}vw`,  ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1, }});
      gsap.to(".canvas6", {filter: 'blur(0px)', opacity:1,x: `${((cw/5.3) / ww) * 100}vw`, y: `${((-cw/5.2) / ww) * 100}vw`,  ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1, }});
      gsap.to(".canvas7", {filter: 'blur(0px)', opacity:1,x: `${((cw/2.6) / ww) * 100}vw`, y: `${((-cw/5.8) / ww) * 100}vw`,  ease: "none", scrollTrigger: {trigger: container, start: "top center", end: "90% bottom",scrub: 1, }});
      ScrollTrigger.refresh();
    }

    return () => {
      window.removeEventListener('reload', updateWidth);
      clearTimeout(imageLoadDelay);
    };
  }, [cw, loadedImages]);

  return (
    <>
      <Navbar />
      <div className='main-container'>
        {/* <Fade triggerOnce damping={0.1} duration={500}> */}
          <div className='landing-container'>
            <div className='landing-grid'>
              <div className='grid-item1'>
                  <Fade triggerOnce damping={1} duration={1000} delay={1500}>
                    <div className='frame-container'></div>

                  </Fade>
                  <Fade triggerOnce damping={1} duration={1000} delay={1000}>
                    <div className='picture-frame'>
                      <img src={mypicture} className='image'></img>
                    </div>
                  </Fade>
              </div>
              <div className='grid-item2 content'>
                <div className='layout'>
                  <span className='nickname'><span className='ken reveal1'>My name's <span className='fw-bold'>Ken</span></span></span>
                  <div className=''>
                    <span className='name '><span className='reveal'><span className='fw-semibold typing-name'><span className='fw-semibold'></span></span></span></span>
                  </div>
                </div>
              </div>
              <div className='grid-item3 content'>
                <div className='layout'>
                  <p className='description'>
                    <span className='reveal3 text-background'>“Get to know me” </span> 
                    <Fade triggerOnce damping={1} duration={1000} delay={1500}>
                      <span className='text px-5'>
                        I’m currently a 3rd-year Computer Engineering major at KMUTT with a strong passion for both technology and art. I aspire to become a full-stack software engineer in the future while also pursuing my passion for illustration.
                      </span>
                    </Fade>
                  </p>
                </div>
              </div>
              <div className='grid-item4 content'>
                <div className="layout">
                  <div className='button-group'>
                    <Fade triggerOnce damping={1} duration={1000} delay={1500} direction='up'>
                      <motion.a href='#portfolio' className='view-port-button' whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} > View Portfolio </motion.a>
                    </Fade>
                    <Fade triggerOnce damping={1} duration={1000} delay={1500} direction='up'>
                      <motion.a href='#art-gallary' className='view-art-button' whileHover={{ scale: 1.1, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }}> Art gallary </motion.a>
                    </Fade>
                  </div>

                </div>
              </div>
            </div>
          </div>
        {/* </Fade> */}
        <div  className="transition-container">

        </div>
        <Fade cascade damping={1} duration={1000}> 
          <div  id='portfolio' className='project-container'>
            <div className='box d-flex flex-column justify-content-start align-items-center'>
              <Reveal triggerOnce damping={1} keyframes={text_up} duration={0}>
                <span className='reveal title p-3'><span className='fw-semibold'>P</span>roject Journey</span>
              </Reveal>
              <div className='text pb-5 pt-3'>This is my experience working on projects during my Computer Engineering studies, along with my personal projects.</div>
              <div className='project-box-container'>
                <div className='grid-item1'>
                  <Fade triggerOnce duration={1000} direction='left'>
                    <div className="project-box">
                        <a href="/project/nawintrade"><img src="./../public/project_image/" alt="" />
                          <div className='image image-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                              <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z"/>
                            </svg>
                          </div>
                        </a>
                      <div className='text'>
                        <div className='name'>Nawin trade</div>
                        <div className='description'>The Stock trading website developed for the Database (CPE241) term project.</div>
                        <a href='/project/nawintrade' className='view'>View project</a>

                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='grid-item2'>
                  <Fade triggerOnce duration={1000} direction='right'>
                    <div className="project-box">
                      <a href="/project/Caraball">
                        <div className='image image-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                              <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
                              <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
                            </svg>
                        </div>
                      </a>
                      <div className='text'>
                        <div className='name'>Caraball</div>
                        <div className='description'>A 3D multiplayer car football league battle game in CPE101 (Engineer exporation)</div>
                        <a href="/project/Caraball" className='view'>View project</a>

                      </div>
                    </div>

                  </Fade>
                </div>
                <div className='grid-item3'>
                  <Fade triggerOnce duration={1000} direction='left'>
                    <div className="project-box">
                      <a href='/project/califonia' className='view'>
                        <div className='image image-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                          </svg>
                        </div>
                      </a>
                      <div className='text'>
                        <div className='name'>Califonia Housing Price Visualization</div>
                        <div className='description'>Data visualization and exploration of California housing prices using Python.</div>
                        <a href='/project/califonia' className='view'>View project</a>

                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='grid-item4'>
                  <div className='button-group mt-0'>
                    <Fade triggerOnce damping={1} duration={1000} delay={500} direction='up'>
                      <motion.a href='#' className='view-port-button' whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} > View more </motion.a>
                    </Fade>
                  </div>

                </div>
              </div>
            </div>
          </div>      
        </Fade>
        <div className="transition-container">
        </div>
        <Fade cascade damping={1} duration={1000}>
          <div className='gallary-container'>
            <div className='gallary-box d-flex flex-column justify-content-start align-items-center'>
            <Reveal triggerOnce damping={1} keyframes={text_up} duration={500}>
              <div id='art-gallary' className='title p-0'><span className='fw-semibold'>M</span>y Art Gallary</div>
            </Reveal>
              <div className='text text-center'>My visual art contributions for game contests and competitions, as well as my commission art work. </div>  
              <div   ref={containerRef} className='image-container'>
                <div className="canvas1 canvas">{showImages && (<LazyLoad offset={50} once><img src="./../public/illustration/Fighting_Hutao.png" onLoad={handleImageLoad}/></LazyLoad>)}</div>
                <div className="canvas2 canvas">{showImages && (<LazyLoad offset={100} once><img src="./../public/illustration/yinlin2.png" onLoad={handleImageLoad} /></LazyLoad>)}</div>
                <div className="canvas3 canvas">{showImages && (<LazyLoad offset={150} once><img src="./../public/illustration/ellen-Recovered.png" onLoad={handleImageLoad} /></LazyLoad>)}</div>
                <div className="canvas4 canvas">{showImages && (<LazyLoad offset={200} once><img src="./../public/illustration/ocdraw04.png" onLoad={handleImageLoad} /></LazyLoad>)}</div>
                <div className="canvas5 canvas">{showImages && (<LazyLoad offset={250} once><img src="./../public/illustration/breakdown art-Recovered.png" onLoad={handleImageLoad} /></LazyLoad>)}</div>
                <div className="canvas6 canvas">{showImages && (<LazyLoad offset={300} once><img src="./../public/illustration/drawoc-final.png" onLoad={handleImageLoad} /></LazyLoad>)}</div>
                <div className="canvas7 canvas">{showImages && (<LazyLoad offset={350} once><img src="./../public/illustration/koledo.png" onLoad={handleImageLoad}/></LazyLoad>)}</div>
              </div> 
            <div className='button-group mt-0'>
              <Fade triggerOnce damping={1} duration={1000} delay={500} direction='up'>
                <motion.a href='#' className='view-port-button' whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} > View more </motion.a>
              </Fade>
            </div>
            </div>
          </div>

        </Fade >
        <div className="transition-container">
        </div>
        <Fade cascade damping={1} duration={2000}>
          <div id='about' className='about-container'>
            <div className='about-box'>
              <Fade triggerOnce  duration={500} direction='left'>
                <div className='picture-canvas'><img src="./../public/about_image/seabackground.jpg" onLoad={handleImageLoad}/></div>
              </Fade>
              <div className='about text-start px-5'>
                <Reveal triggerOnce damping={2} keyframes={text_up} duration={500}>
                  <h1 className='mb-4 title'><span className='fw-semibold'>A</span>bout me</h1>
                </Reveal>

                <Fade triggerOnce  duration={1000} delay={100}>

                  <h5 className='heading'>Personal infomation</h5>
                  <div className='mx-3 text personal'>
                    <div>Date of birth: Febuary 15, 2004</div>
                    <div>Gender : Male</div>
                    <div>Education : king mongkut's university of technology thonburi (KMUTT)</div>
                    <div>Major : Computer Engineering</div>
                  </div>

                  <h5 className='mt-4 heading'>My skill</h5>
                  <div  className='mx-3'>
                    <div className='text'>front-end, back-end developer</div>
                    <div className='icon-box'>
                      <div className='box'><img src={html} alt="html"></img></div>
                      <div className='box'><img src={css} alt="css"></img></div>
                      <div className='box'><img src={js} alt="js"></img></div>
                      <div className='box'><img src={react} alt="react"></img></div>
                      <div className='box'><img src={laravel} alt="laravel"></img></div>
                      <div className='box'><img src={tailwind} alt="tailwind"></img></div>
                      <div className='box'><img src={python} alt="python"></img></div>
                      <div className='box'><img src={daisyui} alt="daisyui"></img></div>
                      <div className='box'><img src={java} alt="java"></img></div>
                      <div className='box'><img src={mysql} alt="mysql"></img></div>
                    </div>
                    <div className='text'>Artist, Visual Art Ilustrator</div>
                    <div className='icon-box'>
                      <div className='box'><img src={adobe} alt="mysql"></img></div>
                      <div className='box'><img src={Illustrator} alt="mysql"></img></div>
                      <div className='box'><img src={procreate} alt="mysql"></img></div>
                    </div>
                    <div className='text'>Graphic, UX/Ui designer</div>
                    <div className='icon-box'>
                      <div className='box'><img src={figma} alt="mysql"></img></div>
                    </div>
                  </div>
                </Fade>
                <div className='about-button-layout'>
                  <motion.a href='./../public/cv/chatchanan_cv.pdf' download={'chatchanan_cv'} whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} className='dowload-button'>download cv</motion.a>
                </div>
              </div>

            </div>
          </div>
        </Fade>
        <Contact />

        <motion.div className='landing-footer' style={{ scaleX }}/>
      </div>
      <Mouse />
    </>
  )
}

export default App
