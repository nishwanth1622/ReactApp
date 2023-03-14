import React from "react";
import CloudComputingImage from './CloudComputing.jpeg'
import CloudComputing from "./CloudComputing";
import DataEngineering from "./DataEngineering";
import MachineLearning from "./MachineLearning";
import EnterpirseApplication from "./EnterpriseApplication";
import { Link } from 'react-router-dom';
import DataEngineeringImage from './DataEngineering.png'
import MachineLearningImage from './MachineLearning.jpeg'
import EnterpirseApplicationImage from './EnterpriseApplication.jpeg'

class Services extends React.Component{

    constructor(props){
        super(props)
        this.state = {urlpath:""}
    }
    componentDidMount(){
        const { params } = this.props.match
        console.log(params)
        this.setState ({ urlpath: params.id})
        
    }
    componentDidUpdate(prevProps){
        if(prevProps.match !== this.props.match ){
            const { params } = this.props.match
            this.setState ({ urlpath: params.id})
        }
        console.log("cloud page")

    }

    render(){
        return(
            <> 
            {this.state.urlpath === "CloudComputing" && (<CloudComputing />)}
            {this.state.urlpath === "DataEngineering" && (<DataEngineering />)}
            {this.state.urlpath === "MachineLearning" && (<MachineLearning/>)}
            {this.state.urlpath === "EnterpriseApplication" && (<EnterpirseApplication />)}
            {this.state.urlpath === "Main" && (
                <><h1>
                        Services Offered are
                    </h1>
                        <Link to="/Services/CloudComputing"> Cloud Computing</Link>
                        <img src={CloudComputingImage} alt="react logo" /><br></br>

                        <Link to="/Services/DataEngineering"> Data Engineering</Link>
                        <img src={DataEngineeringImage} alt="react logo" /><br></br>

                        <Link to="/Services/MachineLearning"> Machine Learning</Link>
                        <img src={MachineLearningImage} alt="react logo" /><br></br>

                        <Link to="/Services/EnterpirseApplication"> Enterpirse Application</Link>
                        <img src={EnterpirseApplicationImage} alt="react logo" />
                        
                        </>
             )
             } </>
         
        )
    }
}
export default Services