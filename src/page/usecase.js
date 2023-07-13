import React from 'react';
import './usecase.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const UseCase = () => {
  return (
    <div>
      <div class="main">
        <div class="main-container">
          <div class="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Peritus Solutions</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link mx-4" href="#">Why Peritus</a>
                  {/* <a class="nav-item nav-link mx-4" href="#">What we do</a> */}
                  <a class="nav-item nav-link mx-4" href="#">Use cases <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link mx-4" href="#">Our Customers</a>
                  <a class="nav-item nav-link mx-4" href="#">Products</a>
                  <Dropdown.Toggle className="nav-link mx-2" id="category-dropdown">
                    Categories
                    <Dropdown.Menu>
                      <Dropdown.Item href="#category1">Category 1</Dropdown.Item>
                      <Dropdown.Item href="#category2">Category 2</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Toggle>
                  <a class="nav-item nav-link mx-4" href="#">Contact us</a>
                  <a class="nav-item nav-link mx-4" href="#">Careers</a>
                </div>
              </div>
            </nav>
            {/* <div className="image-container">
          <img src="/Users/abdurrehman/Documents/study/Work/use_case/use_case/src/img.jpg" alt="Background" />
          <div className="text-overlay">
            <h1>Welcome to my React App!</h1>
            <p>This is my base page.</p>
          </div>
        </div> */}
          </div>
        </div>
      </div>


      <div class="background-image">
        <div class="background-image-text" style={{ fontFamily: 'Unna', letterSpacing: '1px' }}>
          {/* <h1 style={{ fontWeight: "bold", fontStyle: 'italic' }}>Your company's one-</h1>
            <h1 style={{ fontWeight: "bold", fontStyle: 'italic' }}>stop engineering</h1>
            <h1 style={{ fontWeight: "bold", fontStyle: 'italic' }}>shop</h1> */}
          <div style={{ padding: "0 0 0 6%" }}>

            <h1 style={{ color: 'unset', fontSize: '65px', fontFamily: 'Unna' }}><b>Your company's one-<br />stop engineering <br />shop </b></h1>
            <br />
            <p style={{ fontFamily: 'Arial', fontSize: '20px' }}>
              We take care of everything from devising<br /> strategies to deploying products with our <br />dedicated teams of developers, software <br />architects, and project managers.
            </p >
            <a href='facebook.com' style={{}}>
              <svg width="56" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m50 14 5 6-5 6" stroke="#fff"></path><circle cx="20" cy="20" r="19.625" stroke="#fff" stroke-width="0.75"></circle><path d="M25 20h30" stroke="#fff"></path></svg>
              <span style={{ fontFamily: 'Arial', fontSize: '20px', fontWeight: 'bold' }}> Let's start your project</span>
            </a>
          </div>

          {/* <div class="background-image-text-p">
              <p style={{ fontStyle: 'italic' }}>
                We take care of everything from devising strategies to deploying<br />
                products with our dedicated teams of developers, software<br />
                architects, and project managers.<br />
              </p>
            </div> */}
          {/* <imag src="" /><h3>Let's start your project</h3> */}
        </div>
      </div>

      {/* grids listing possible services */}
      <br />
      {/* <div className="section-divider"></div> */}
      <div className='main'>
        {/* <h2 className='heading' style={{ fontWeight: "bold" }}><i> Our services </i></h2> */}
        <br />
        {/* <br/> */}
        <div className="services-container" >
          <div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>Qlik Analytics & Data Integration Platform</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>Enterprise Cloud Solutions</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>Enterprise Cloud Solutions</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div><div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className="service-item">
            <h3>SAP ERP Solutions & Business Consulting</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>





        </div>

        <div className="section-divider"></div>
        <h2 className='heading' style={{ fontWeight: "bold" }}><i> Why choose us? </i></h2>
        <br />

        <div className='customer-reviews-container'>
          <div className='review-item'>
            <h3>Review 1</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className='review-item'>
            <h3>Reveiw 2</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className='review-item'>
            <h3>Reveiw 3</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
          <div className='review-item'>
            <h3>Reveiw 4</h3>
            <p>ough code instead of through manual processes.
              With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations. It also ensures that you provision the same environment every time. By codifying and documenting your configuration specifications, IaC aids configuration management and helps you to avoid undocumented, ad-hoc configuration changes.
            </p>
          </div>
        </div>

        <div className="section-divider"></div>
        <div className="signup-form-container">
          <h2 className='heading' style={{ fontWeight: "bolder" }}><i> LET’S START SOMETHING NEW THEN? </i></h2>
          <h2>Sign up for our Services</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Postal Code" />
            <input type="text" placeholder="Services Required" />

            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>



      <div className='foot'>
        <footer className="footer-container">

          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 2</li>
              <li>Service 2</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>About Us</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <p>1234 Street, City</p>
            <p>Email: info@example.com</p>
          </div>

        </footer>
      </div>
    </div>

  );
}

export default UseCase;
