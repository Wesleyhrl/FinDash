import { Col, Row } from "react-bootstrap";
import ValueBox from "../common/widget/ValueBox.jsx";
import { AiFillBank, AiFillCreditCard, AiFillDollarCircle } from "react-icons/ai";

export default function Summary({ credit, debt }) {
    return (
        <Col>
            <fieldset>
                <legend>Resumo</legend>
                <hr />
                <Row>
                    <ValueBox xs={12} lg={4} color="success" value={`R$ ${credit}`} text="Total de Créditos" icon={<AiFillBank />} />
                    <ValueBox xs={12} lg={4} color="danger" value={`R$ ${debt}`} text="Total de Débitos" icon={<AiFillCreditCard />} />
                    <ValueBox xs={12} lg={4} color="primary" value={`R$ ${credit - debt}`} text="Valor Consolidado" icon={<AiFillDollarCircle />} />
                </Row>
            </fieldset>
        </Col>
    )
}