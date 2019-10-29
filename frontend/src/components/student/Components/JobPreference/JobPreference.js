import React from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import Button1 from '../../../common_assets/Button1/Button1';
import classes2 from '../../../common_assets/Miscellaneous.module.css';

const jobPreference = props => {
    return(
        <React.Fragment>
            <Row>
                <Col className={classes2.Title}>
                    Job Preference #{props.details.JobPreferenceID}
                </Col>
                <Col md={{ offset: 9, span: 1 }} className={classes2.Delete}>
                    <Button1 click={props.remove} delete><i className="fas fa-trash-alt"></i></Button1>
                </Col>
            </Row>
            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="Industry">
                    <Form.Label>Industry</Form.Label>
                        <Form.Control type='text' placeholder="Accounting" value={props.details.Industry} onChange={props.changeFn} required/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="Position">
                    <Form.Label>Position</Form.Label>
                        <Form.Control type='text' placeholder="Senior Level" value={props.details.Position} onChange={props.changeFn} required/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="JobType">
                    <Form.Label>Job Type</Form.Label>
                        <Form.Control type='text' placeholder="Full Time" value={props.details.JobType} onChange={props.changeFn} required/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="ExpectedSalary">
                    <Form.Label>Expected Salary</Form.Label>
                        <Form.Control type='text' placeholder="90000" value={props.details.ExpectedSalary} onChange={props.changeFn} required/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} sm='6' controlId="Location">
                    <Form.Label>Location</Form.Label>
                        <Form.Control type='text' placeholder="Singapore" value={props.details.Location} onChange={props.changeFn} required/>
                </Form.Group>

                <Form.Group as={Col}  sm='6' controlId="Availability">
                    <Form.Label>Availability</Form.Label>
                        <Form.Control type='text' placeholder="Immediately" value={props.details.Availability} onChange={props.changeFn} required/>
                </Form.Group>
            </Form.Row>
        </React.Fragment>
    );
}

export default jobPreference;