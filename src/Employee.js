
import axios, * as others from 'axios';

import React from "react";
import { Container, Table, ButtonGroup, Button } from 'react-bootstrap';


class Employee extends React.Component {

    constructor(props) {
        super(props)
        this.state = { employees: [] }
    }
    componentDidMount() {

        //call to service layer (spring boot application)
        const params = {
            method: "GET",
        }
        fetch(`http://localhost:8081/employees`, params)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({ employees: data })
            })

        //call to service layer (spring boot application)
        // axios.get(`http://localhost:8080/employees`).then
        //     (response => response.data).then(
        //         data => {
        //             console.log(data)
        //             this.setState({ persons: data })
        //         }
        //     )

    }

    render() {

        const { employees } = this.state;

        const employeeList = employees.map(employee => {
            return <tr key={employee.employeeNumber}>
                <td>{employee.employeeNumber}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{employee.firstName}</td>
                <td>{employee.lastName}</td>
            </tr>

        });

        return (<>
            <div>
               
                <Container fluid>
                    <h3>Employees</h3>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="20%">Employee Id</th>
                                <th width="20%">First Name</th>
                                <th width="20%">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>);
    }
}

export default Employee