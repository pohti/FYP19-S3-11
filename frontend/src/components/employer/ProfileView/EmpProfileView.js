import React, {Component} from 'react';
import CompanyLogo from '../Components/LeftSide/CompanyInfo';
import classes from './EmpProfileView.module.css';
import { Card, Container, Row, Col } from 'react-bootstrap';

import apiURL from '../../../config'
import Axios from 'axios';


//This is the profile of the company the students will view when they click to find out more
// about the company

class EmpProfileView extends Component {

    empID = localStorage.getItem('id')
    state = {
        username: localStorage.getItem('username'),
        companyname: "",
        companyphone: "",
        companydescription: "",
        companyaddress: "",
        industry: "",
        loading: false
    }

    componentDidMount() {
        Axios.get(`${apiURL}employer/employerinfo/${this.empID}`)
            .then(response => {
                this.setState({
                    companyname     : response.data.body[0].companyname,
                    companyphone    : response.data.body[0].companyphone,
                    companydescription  : response.data.body[0].companydescription,
                    companyaddress  : response.data.body[0].companyaddress,
                    industry        : response.data.body[0].industry
                })
                console.log(response.data);
            })
            .catch(error => {
                alert(`failed to fetch employer details : ${error}`)
        })
    }

    render(){
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col md={{ offset: 1, span: 4 }}>
                            <Card>
                                <Card.Body>
                                    <CompanyLogo companyName={this.state.companyname} buttonText="Find out more!" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={{ offset: 0, span: 6 }}>
                            <Card>
                                <Card.Body>
                                <Card.Title>Company Phone</Card.Title>
                                    {this.state.companyphone}
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Card.Title>Industry</Card.Title>
                                    {this.state.industry}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={{ offset: 1, span: 10 }}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Brief Overview</Card.Title>
    <pre>
    {`
    ${this.state.companydescription}
    `}
    </pre>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <br />
                </Container>
            </React.Fragment>
        )
    }
};

export default EmpProfileView;
