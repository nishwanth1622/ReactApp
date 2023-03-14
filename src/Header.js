import React from "react"
import Indusvalley from  './Indusvalley.jpeg'; 

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: ["Name", "Age", "City", "Address", "Country"],
        newNumber: []
    }
    }

    handleMultiple(){
        this.setState({newNumber: this.state.number.filter(item => item >2)})
    }

    render() {
        const { number, newNumber }= this.state

      return (
        <>
       {number.map((item) => {
        return(
        <h2> Number list is {item}</h2>
        )
       })}
       {newNumber && newNumber.length > 0 && newNumber.map((item) => {
        return(
            <h2> New list generated is {item}</h2>
        )
       })}
       <button onClick ={() => this.handleMultiple()}>Click</button>
       </>
      );
    }
  }
export default Header
// class Header extends React.Component{

//     constructor(props){
//         super(props)

//         this.state = {
//             count: null
//         }
//     }

//     componentDidMount(){
//        this.setState ({count :1})
//     }

//     render(){
//         const{count} = this.state
//         return (
//                 <header className="App-header">
            
//                  <h1>
//                      Cricket{count}
//                 </h1>
            
//                 {/* <img src={Indusvalley} alt="react logo" />
//                     <h4> Trust comes with time</h4>
            
//                      <a href="www.indusvalley.com"> Click here</a> */}
//                 </header>
//                 )
//     }
// }


