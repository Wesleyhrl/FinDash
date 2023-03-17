import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default function LabelAndInput(props){
    return(
        <Form.Group as={Col}>
          <Form.Label htmlFor={props.name}>{props.label}</Form.Label>
          <Form.Control {...props.input} placeholder={props.placeholder} readOnly={props.readOnly} type={props.type}/>
        </Form.Group>
    )
}