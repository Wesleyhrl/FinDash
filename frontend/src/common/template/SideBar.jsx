import './SideBar.css';
import Menu from './Menu';
import { FaCoins } from "react-icons/fa";
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function SideBar(props) {
    return (
        <aside className={`SideBar`}>
            <div className='d-none d-lg-flex menu-lg'>
                <Menu/>
            </div>
            <Offcanvas show={props.show} onHide={props.handleClose}>
                <Offcanvas.Header className='canvas-h' closeButton>
                    <Offcanvas.Title><FaCoins /> <span>FinDash</span></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='canvas-b'>
                    <Menu />
                </Offcanvas.Body>
            </Offcanvas>

        </aside>
    )
}