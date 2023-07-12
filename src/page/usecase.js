import React from 'react';
import './usecase.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const UseCase = () => {
  return (
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

      <div class="background-image">
        <div class="background-image-text" style={{ fontFamily: "Arial", fontSize: '20px' }}>
          <h1 style={{ fontWeight: "bold", fontStyle: 'italic' }}>Your company's onestop engineering</h1>
          <div class="background-image-text-p">
            <p style={{ fontStyle: 'italic' }}>
              We take care of everything from devising strategies to deploying<br />
              products with our dedicated teams of developers, software<br />
              architects, and project managers.<br />
            </p>
          </div>
        </div>
      </div>

      {/* grids listing possible services */}
      <br />
      {/* <div className="section-divider"></div> */}
      <h2 className='heading' style={{ fontWeight: "bold" }}><i> Our services </i></h2>
      <br />
      {/* <br/> */}
      <div className="services-container">
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

  );
}

export default UseCase;
