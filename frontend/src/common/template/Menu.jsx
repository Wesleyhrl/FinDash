import { AiFillDashboard, AiOutlineSchedule } from "react-icons/ai";
import { FaMoneyBill } from "react-icons/fa";
import TreeView from './TreeView';
import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu(props) {
    return (
        <nav className="Menu">
            <ul>
                <li>
                    <Link to="/"><AiFillDashboard /> Dashboard</Link>
                </li>
                <li className="d-flex">
                    
                        <TreeView name="Cadastro" icon={<AiOutlineSchedule />}>
                            <Link to="/billingcyles"><FaMoneyBill/> Clico de Pagamentos</Link>
                        </TreeView>


                </li>
            </ul>
        </nav>
    )
}