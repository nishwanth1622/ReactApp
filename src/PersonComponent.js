
import axios, * as others from 'axios';

import React from "react";
import { Container, Table, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PersonComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = { persons: [] }
    }

    componentDidMount() {


        const params = {
            method: "GET",
        }
       fetch(`http://localhost:8081/persons`, params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({ persons: data })
            })

    // call to service layer (spring boot application)
        // axios.get(`http://localhost:8081/persons`).then
        //     (response => response.data).then(
        //         data => {
        //             console.log(data)
        //             this.setState({ persons: data })
        //         }
        //     )

    }

    render() {

        const { persons } = this.state;

        const personList = persons.map(person => {
            return <tr key={person.id}>
                <td>{person.id}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{person.firstName}</td>
                <td>{person.lastName}</td>
            </tr>

        });

        return (<>
            <div>
                <Container fluid>
                    <h3>Persons</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Person id</th>
                                <th width="20%">First Name</th>
                                <th width="20%">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {personList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>);
    }
}

export default PersonComponent;