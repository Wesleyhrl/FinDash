import Button from 'react-bootstrap/Button';
import { reduxForm, Field , formValueSelector } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import LabelAndInput from '../common/form/LabelAndInput.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { init } from './BillingCycleActions.js';
import { Component } from 'react';
import ItemList from './ItemList';
import Summary from './Summary.jsx';


class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly , credits , debts } = this.props;
        const { sumOfCredits , sumOfDebts} = this.calculateSummary();
        return (
            <Form onSubmit={handleSubmit} className="p-2">
                <Row className="mb-3">
                    <Field name="name" component={LabelAndInput} label="Nome" placeholder="Informe o nome" readOnly={readOnly} />
                    <Field name="month" component={LabelAndInput} type="number" label="Mês" placeholder="Informe o mês" readOnly={readOnly} />
                    <Field name="year" component={LabelAndInput} type="number" label="Ano" placeholder="Informe o ano" readOnly={readOnly} />
                </Row>
                <Row className="mb-3">
                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>
                </Row>
                <Row>
                    <ItemList xs={12} lg={6} list={credits} readOnly={readOnly} field="credits" legend="Créditos"/>
                    <ItemList xs={12} lg={6} list={debts} readOnly={readOnly} field="debts" legend="Débitos" showStatus={true}/>
                </Row>
                <Form.Group className="mb-3">
                    <Button className='m-1' type="submit" variant={this.props.submitVariant}>{this.props.submitLabel}</Button>
                    <Button className='m-1' type="button" variant="dark" onClick={this.props.init} >Cancelar</Button>
                </Form.Group>


            </Form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

const selector = formValueSelector("billingCycleForm");
const mapStateProps = state => ({credits: selector(state, "credits"), debts: selector(state, "debts")});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateProps, mapDispatchToProps)(BillingCycleForm);