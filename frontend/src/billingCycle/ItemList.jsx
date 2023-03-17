import { Button, Col } from "react-bootstrap";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Input from "../common/form/Input.jsx";
import { BsClipboardPlus, BsStickies, BsTrash } from "react-icons/bs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import If from './../common/operator/If';

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

function ItemList(props) {
    function add(index, item = {}) {
        if (!props.readOnly) {
            props.arrayInsert("billingCycleForm", props.field, index, item);
        }
    }
    function remove(index) {
        if (!props.readOnly && props.list.length > 1) {
            props.arrayRemove("billingCycleForm", props.field, index);
        }
    }


    function renderRows() {
        const list = props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${props.field}[${index}].name`} placeholder="Informe o nome" readOnly={props.readOnly} component={Input}></Field>
                </td>
                <td>
                    <Field name={`${props.field}[${index}].value`} placeholder="Informe o valor" readOnly={props.readOnly} component={Input}></Field>
                </td>
                <If test={props.showStatus}>
                    <td>
                        <Field name={`${props.field}[${index}].status`} placeholder="Informe o Status" readOnly={props.readOnly} component={Input}></Field>
                    </td>
                </If>
                <td class="d-flex">
                    <Button className='pt-0 lh-sm fs-5 m-1' type="button" variant="success" size="sm" onClick={() => add(index + 1)}>
                        <BsClipboardPlus />
                    </Button>
                    <Button className='pt-0 lh-sm fs-5 m-1' type="button" variant="warning" size="sm" onClick={() => add(index + 1, item)}>
                        <BsStickies />
                    </Button>
                    <Button className='pt-0 lh-sm fs-5 m-1' type="button" variant="danger" size="sm" onClick={() => remove(index)}>
                        <BsTrash />
                    </Button>
                </td>
            </tr>
        ))

    }

    return (
        <Col xs={props.xs} lg={props.lg}>
            <fieldset>
                <legend>{props.legend}</legend>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.showStatus}>
                                <th>Status</th>
                            </If>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            </fieldset>
        </Col>
    )
}

export default connect(null, mapDispatchToProps)(ItemList);