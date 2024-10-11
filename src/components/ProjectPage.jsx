import './ProjectPage.css'
import './ProjectDetail.css'
import Navbar from './Navbar'
import Mouse from '../Mouse.jsx';
import Contact from './Contact'

function ProjectPage() {
  return (
    <>
    <Mouse />
    <Navbar /> 
    <div className='main-project-container'>
      <div className='navbar-block'></div>
      <div  id='portfolio' className='project-container mt-5'>
            <div className='box d-flex flex-column justify-content-start align-items-center'>
                <span className='reveal title p-3'><span className='fw-semibold'>M</span>y Project</span>
              <div className='text pb-5 pt-3'>This is my experience working on projects during my Computer Engineering studies, along with my personal projects.</div>
              <div className='project-box-container'>
                <div className='grid-item1'>
                    <div className="project-box">
                      <div className='image image-1'><a href="/project/nawintrade"><img src="./../public/project_image/" alt="" /></a></div>
                      <div className='text'>
                        <div className='name'>Nawin trade</div>
                        <div className='description'>The Stock trading website developed for the Database (CPE241) term project.</div>
                        <a href='/project/nawintrade' className='view'>View project</a>

                      </div>
                    </div>
                </div>
                <div className='grid-item2'>
                    <div className="project-box">
                      <div className='image image-1'><a href="/project/Caraball"><img src="./../public/project_image/" alt="" /></a></div>
                      <div className='text'>
                        <div className='name'>Caraball</div>
                        <div className='description'>A 3D multiplayer car football league battle game in CPE101 (Engineer exporation)</div>
                        <a href="/project/Caraball" className='view'>View project</a>

                      </div>
                    </div>

                </div>
                <div className='grid-item3'>
                    <div className="project-box">
                      <div className='image image-1'></div>
                      <div className='text'>
                        <div className='name'>Califonia Housing Price Visualization</div>
                        <div className='description'>Data visualization and exploration of California housing prices using Python.</div>
                        <a className='view'>View project</a>

                      </div>
                    </div>
                </div>
                <div className='grid-item4'>
                  <div className='button-group mt-0'>
                  </div>

                </div>
              </div>
            </div>
          </div>
     </div>
    <Contact />
    </>
  )
}

export default ProjectPage
