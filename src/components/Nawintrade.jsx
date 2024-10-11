import './ProjectDetail.css'
import Navbar from './Navbar'
import Mouse from './mouse'
import Contact from './Contact'

function Nawintrade() {
  return (
    <>
     <Mouse />
     <Navbar /> 
     <div className='main-project-container'>
      <div className='navbar-block'></div>
      <div className='project-container-layout'>
          <div className='project-header'>
            <h1 className='title mb-5'>Nawin trade</h1>  
            <p className='text mb-5'>The Stock trading website developed for the Database (CPE241) term project.</p>
          </div>
          <div className='project-image-layout'>
            <div className='project-image'>
              <img src="./../public/project_asset/user register.png" alt="" />
            </div>
          </div>
        <div className='text project-detail'>
          <h2 className='title mt-5 mb-3'>Project Overview</h2>
          <p>The Online Stock Trading Web Application project focuses on implementing stock trading processes with React, Express, and MySQL. It emphasizes complex transaction handling, database normalization, and efficient SQL queries. The project also involves front-end and back-end development, alongside UX/UI design, to deliver a functional and user-friendly trading platform.</p>
          <h2 className='title mt-5 mb-3'>Feature</h2>
          <ul>
            <li className='mb-4'>Login System: Clients can securely log in using their username and password provided during account registration with the broker. This system ensures secure access to the platform for trading and account management.</li>
            <li className='mb-4'>Stock Trading System: Clients can view real-time stock prices and other relevant information. They can buy or sell stocks and monitor the status of their trades directly on the platform.</li>
            <li className='mb-4'>Deposit and Withdrawal System: Clients can easily deposit or withdraw funds from their accounts. The system ensures that all transactions are secure and can be performed at any time.</li>
            <li className='mb-4'>Dollar-Cost Averaging (DCA) System: This feature allows clients to invest regularly in stocks by purchasing a fixed amount at regular intervals, regardless of stock prices, helping to reduce risk and increase potential long-term gains.</li>
            <li className='mb-4'>Stock Management by Staff: Staff members can introduce new stocks to the platform, allowing clients to trade new stock options as they are added.</li>
            <li className='mb-4'>Order Verification by Staff: Staff are notified of any trades requiring review and can confirm client orders, ensuring accurate and reliable execution of transactions.</li>
          </ul>
          <h2 className='title mt-5 mb-4'>Database design</h2>
          <div className='image'><img src="./../public/project_asset/ER-Diagram.png" alt="" style={{maxWidth: '700px'}} /></div>
          <h2 className='title mt-5 mb-3'>UX/UI design</h2>
          <div className='row'>
            <div className='col-6'>
              <div className='image'><img src="./../public/project_asset/stock view.png" alt="" /></div>

            </div>
            <div className='col-6 d-flex flex-column justify-content-between'>
              <div className='image'><img src="./../public/project_asset/user register.png" alt="" /></div>
              <div className='image'><img src="./../public/project_asset/buy stock.png" alt="" /></div>
              <div className='image'><img src="./../public/project_asset/sell stock.png" alt="" /></div>
            </div>

          </div>
          <h2 className='title mt-5 mb-3'>Teachnology</h2>
          <ui>
            <li className='mb-4'>Front-end: React, Tailwind CSS, DaisyUI</li>
            <li className='mb-4'>Back-end: Node.js, Express.js</li>
            <li className='mb-4'>Database: MySQL (AWS RDS)</li>
            <li className='mb-4'>Hosting: AWS RDS for database hosting, local hosting for development</li>
          </ui>
        </div>
        
      </div>
     </div>
     <Contact />
    </>
  )
}

export default Nawintrade
