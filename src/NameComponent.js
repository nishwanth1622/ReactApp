import React from 'react';

class NameComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: {
                firstName: props.firstName,
                lastName: props.lastName,
                middleName: props.middleName
            }
        }
    }

    handleFirstName(e){
        this.props.handleName(e?e.target.value: "","","")
    }
    render() {
        return (
            <div>
                <label>
                    First Name:
                </label>
                <input type="text" onChange= {(e) => this.handleFirstName(e)} value={this.state.customer.firstName} />
                <br />
                <label>
                    Last Name:
                </label>
                <input type="text" onChange= {(e) => this.handleLastName(e)} value={this.state.customer.lastName} />
                <br />
                <label>
                    Middle Name:
                </label>
                <input type="text" onChange= {(e) => this.handlemiddleName(e)} value={this.state.customer.middleName} />
                <br />
            </div>
        );
    }
}
export default NameComponent