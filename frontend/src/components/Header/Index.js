import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './index.scss';

const Header = () => {
  return (
    <header>
        <div className='wrapper-page'>
            <div className='container-page'>
            <Navbar className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="/">
                    <img 
                        src="https://www.tiendamia.co/static/version1689871478/frontend/Tiendamia/tiger/es_CO/images/logo.svg"
                        alt="logo tienda mia"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                </Container>
            </Navbar>
            </div>
        </div>
    </header>
  );
};

export default Header;