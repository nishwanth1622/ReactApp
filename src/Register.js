import React from "react";
import TableComponent from "./TableComponent.js";
import NameComponent from "./NameComponent.js";
class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = { customer: {firstName:""}, customer: {lastName:""},customer: {middleName:""}, age: "", sname: "", city: "", country: "", course: "", buttonClicked: false }

    }

    handleMultiple() {
        this.setState({ buttonClicked: true })

    };

    handleName(firstName, lastName, middleName){
        if(firstName){
            this.setState({
                customer: {
                      ...this.state.customer,
                      firstName: firstName
                }
            })
        }
        if(lastName){
            this.setState({
                customer: {
                      ...this.state.customer,
                      lastName: lastName
                }
            })
        }
        if(middleName){
            this.setState({
                customer: {
                      ...this.state.customer,
                      middleName: middleName
                }
            })
        }
    }

    handleNameChange(e, key) {
        this.setState({ [key]: e.target.value })
    }
    handleAgeChange(e) {
        this.setState({ age: e.target.value })
    }
    handlesnameChange(e) {
        this.setState({ sname: e.target.value })
    }
    handlecityChange(e) {
        this.setState({ city: e.target.value })
    }
    handlecountryChange(e) {
        this.setState({ country: e.target.value })
    }
    handlecourseChange(e) {
        this.setState({ course: e.target.value })
    }
    render() {

        return (
            <>
                {this.state.buttonClicked && (<TableComponent customer={this.state.customer} age={this.state.age} sname={this.state.sname} city={this.state.city} country={this.state.country} course={this.state.course} />)}
                {
                    !this.state.buttonClicked && (<form>
                       <NameComponent 
                        handleName= {this.handleName.bind(this)}
                       ></NameComponent>
                        <label>Age:
                            <input type="text" onChange={(e) => this.handleNameChange(e, "age")} value={this.state.age} /> <br></br>
                        </label>
                        <label>Street name:
                            <input type="text" onChange={(e) => this.handlesnameChange(e)} value={this.state.sname} /> <br></br>
                        </label>
                        <label>City:
                            <input type="text" onChange={(e) => this.handlecityChange(e)} value={this.state.city} /> <br></br>
                        </label>
                        <label>Country:
                            <input type="text" onChange={(e) => this.handlecountryChange(e)} value={this.state.country} /> <br></br>
                        </label>
                        <label>Course:
                            <input type="text" onChange={(e) => this.handlecourseChange(e)} value={this.state.course} /> <br></br>
                        </label>
                        <button onClick={() => this.handleMultiple()}>Click</button>
                    </form>
                    )
                }


            </>

        );

    }

}



export default Register
