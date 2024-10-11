import './ProjectDetail.css'
import Navbar from './Navbar'
import Mouse from '../mouse'
import Contact from './Contact'

function Califonia() {
  return (
    <>
    <Mouse />
    <Navbar /> 
    <div className='main-project-container'>
     <div className='navbar-block'></div>
     <div className='project-container-layout'>
         <div className='project-header'>
           <h1 className='title mb-5'>Califonia housing price data visualization</h1>  
           <p className='text mb-5'>the data visualization in cpe232 (data model) term project</p>
         </div>
         <div className='project-image-layout'>
           <div className='project-image'>
             <img src="./../public/project_asset/califonia main.jpeg" alt="" />
           </div>
         </div>
       <div className='text project-detail'>
         <h2 className='title mt-5 mb-3'>Overview</h2>
         <p>This project analyzes California housing price data using Exploratory Data Analysis (EDA) and visualization techniques to uncover key insights into housing prices. A predictive model is built using Linear Regression and Random Forest to estimate house values based on historical data. The repository contains the Jupyter Notebook used for analysis and modeling, along with a PDF report documenting the project’s methodology and findings.</p>
         <h2 className='title mt-5 mb-3'>Methodology</h2>
         <ul>
           <li className='mb-4'>
                <p>Data explanation : Understand the California housing price data, including attributes such as longitude, latitude, housing median age, total rooms, and more.</p>
                <ul>
                    <li>Longitude: The geographical longitude of the housing block, a continuous variable</li>
                    <li>Latitude: The geographical latitude of the housing block, a continuous variable.</li>
                    <li>Housing Median Age: The median age of houses within the block (in years).</li>
                    <li>Total Bedrooms: The total number of bedrooms in all houses within the block.</li>
                    <li>Population: The population residing in the block</li>
                    <li>Households: The number of households (families) in the block.</li>
                    <li>Median Income: The median income of households in the block.</li>
                    <li>Median House Value: The median house value of the block.</li>
                </ul>
           </li>
           <li className='mb-4'>
                <p>Data preparation</p>
                <ul>
                    <li>view overall of data such as data-type, null-value, distribution and outlier</li>
                    <li>
                        <div className="row my-3">
                            <div className='col-12'>
                                <div className='image'><img src="./../public/project_asset/house image1.png" alt="" /></div>
                            </div>
                            <div className='col-12'>
                                <div className='image my-3'><img src="./../public/project_asset/house image3.png" alt="" /></div>
                            </div>
                        </div>
                    <li>clean the data</li>
                        <div className="row my-3">
                            <div className='col-12'>
                                <div className='image'><img src="./../public/project_asset/house image2.png" alt="" /></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
           <li className='mb-4'>
                <p>EDA and visualization of data</p>
                <div className="row my-3">
                    <div className='col-12'>
                        <div className='image'><img src="./../public/project_asset/house image4.png" alt="" /></div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className='col-12'>
                        <div className='image'><img src="./../public/project_asset/house image5.png" alt="" /></div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className='col-12'>
                        <div className='image'><img src="./../public/project_asset/house image6.png" alt="" /></div>
                    </div>
                </div>
            </li>
           
         </ul>
         <h2 className='title mt-5 mb-3'>Teachnology</h2>
         <ui>
           <li className='mb-4'>Data cleansing: Pandas, Numpy</li>
           <li className='mb-4'>Data visualization: Seabon, Matplotlib</li>
         </ui>
       </div>
       
     </div>
    </div>
    <Contact />
   </>
  )
}

export default Califonia
