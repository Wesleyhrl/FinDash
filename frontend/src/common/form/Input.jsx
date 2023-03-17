import Form from 'react-bootstrap/Form';

export default function Input(props){
    return(
        <Form.Control {...props.input}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          type={props.type}
          size={props.size}
        />
    )
}