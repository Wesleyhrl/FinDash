import Col from 'react-bootstrap/Col';
import './ValueBox.css';

export default function ValueBox(props) {
    return (
        <Col xs={props.xs} lg={props.lg}>
            <div className={`ValueBox bg-${props.color} d-flex d-flex justify-content-center justify-content-md-between p-2`} >
                <div className='text-center ms-md-3'>
                    <h3>{props.value}</h3>
                    <p>{props.text}</p>
                </div>
                <div className='icon d-none d-md-block me-md-3'>
                    {props.icon}
                </div>
            </div>
        </Col>
    )
}