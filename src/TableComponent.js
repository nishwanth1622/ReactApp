import React from "react";

class TableComponent extends React.Component {

    render() {
        const { name, age, sname, city, country, course } = this.props

        return (

            <><style>
                table,th,td {"\
        table,th,td{\
            border: 1px solid black;\
        }\
      "}
            </style>

                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Course</th>
                    </tr>
                    <tr>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{sname}</td>
                        <td>{city}</td>
                        <td>{country}</td>
                        <td>{course}</td>
                    </tr>

                </table>

                {/* <table>
                    <tr>
                        <th>Employee id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>{employeeNumber}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                    </tr>

                </table> */}
            </>


        )
    }

}

export default TableComponent