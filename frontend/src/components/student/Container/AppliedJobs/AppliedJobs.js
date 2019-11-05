import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import classes from './AppliedJobs.module.css';

import Axios from 'axios';

import JobCard from '../../Components/JobCard/JobCard';

class AppliedJobs extends Component {
    state = {
        "AppliedJobs": [],
        "active": false,
        "jobsPerPage": 5,
        "pageNo": 1
    };

    toggle = () => this.setState({ "active": !this.state.active });

    componentDidMount(){
        Axios.get("http://localhost:3000/AppliedJobs")
            .then(receivedData =>{
                this.setState({ AppliedJobs: receivedData.data });
                console.log(receivedData.data);
            });
    }

    render() {
        const active = this.state.active;
        const unfav = <i class="far fa-star" />
        const fav = <i class="fas fa-star" style={{ "color": "#FFCA28" }} />
        return (
            <Container >
                <br />
                <Row className={classes.Title}>
                    Applied Jobs
                </Row>
                <br />

                {this.state.AppliedJobs.slice(((this.state.pageNo-1)*this.state.jobsPerPage), ((this.state.pageNo-1)*this.state.jobsPerPage)+this.state.jobsPerPage).map(jobDetail => {
                    return(
                        <React.Fragment>
                            <JobCard jobDetail={jobDetail} Applied/>
                            <br />
                        </React.Fragment>
                    );
                })} 
                <br />
                
            </Container>
        );
    }
}

export default AppliedJobs;