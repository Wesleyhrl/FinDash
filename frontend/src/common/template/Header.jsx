import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCoins, FaBars } from "react-icons/fa";
import './Header.css'

export default function Header(props) {
    return (
        <header className='Header'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <FaCoins /> <span>FinDash</span>
                </Navbar.Brand>
                <Nav className='d-lg-none ms-auto'>
                    <button onClick={(e) => props.handleShow()} ><FaBars /></button>
                </Nav>
            </Navbar>
        </header>
    )

}