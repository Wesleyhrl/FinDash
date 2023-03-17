import Content from "../common/template/Content.jsx";
import ContentHeader from "../common/template/ContentHeader.jsx";
import Row from 'react-bootstrap/Row';
import ValueBox from './../common/widget/ValueBox';
import { AiFillBank, AiFillCreditCard, AiFillDollarCircle } from "react-icons/ai";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSummary } from './DashboardActions';
import { Component } from "react";

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);

class DashBoard extends Component {
    componentDidMount() {
        this.props.getSummary();
    }

    render() {
        const { credit, debt } = this.props.summary;
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox xs={12} lg={4} color="success" value={`R$ ${credit}`} text="Total de Créditos" icon={<AiFillBank />} />
                        <ValueBox xs={12} lg={4} color="danger" value={`R$ ${debt}`} text="Total de Débitos" icon={<AiFillCreditCard />} />
                        <ValueBox xs={12} lg={4} color="primary" value={`R$ ${credit - debt}`} text="Valor Consolidado" icon={<AiFillDollarCircle />} />
                    </Row>
                </Content>
            </div>
        )
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);