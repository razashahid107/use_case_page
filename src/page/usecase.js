import React from 'react';
import './usecase.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const UseCase = () => {
  return (
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
    </div>
  );
}

export default UseCase;
