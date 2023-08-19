import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { useSelector } from 'react-redux';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation_Bar() {
    const status = useSelector((state)=>state.database.status)

    return (
        <div>
            <Navbar bg="blue" variant="blue">
                <Navbar.Brand href="/">
                <img src="/resources/images/logo.png" alt="logo" width={70} height={30} className="mr-3" />
                  AGE Viewer
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <div className="text-white text-lg">
                        Connection Stat:
                        <div className='d-inline ml-2 text-lg-center'>
                            {status === 'connected' ? <FontAwesomeIcon className="mr-1" icon={faCircle} color="green" style={{ fontSize: '0.60rem' }} /> : ''}
                             {status}
                        </div>
                    </div>
                </Nav>
            </Navbar>
        </div>
    )


}

export default Navigation_Bar