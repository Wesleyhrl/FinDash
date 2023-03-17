import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getList , showUpdate , showDelete} from "./BillingCycleActions.js";
import Button from 'react-bootstrap/Button';
import { BsPencilSquare, BsTrash } from "react-icons/bs";

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList , showUpdate , showDelete }, dispatch);

class BillingCycleList extends Component {
    componentDidMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <Button className="m-1" size="sm" variant="warning" onClick={() => this.props.showUpdate(bc)}>
                        <BsPencilSquare />
                    </Button>
                    <Button className="m-1" size="sm" variant="danger" onClick={() => this.props.showDelete(bc)}>
                        <BsTrash />
                    </Button>
                </td>
            </tr>
        ))
    }


    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th style={{width: "150px"}}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);