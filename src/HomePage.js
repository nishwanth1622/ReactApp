import React from "react";
import Indusvalley from './Indusvalley.jpeg';

class HomePage extends React.Component{

    render(){
        return(
            <><h1>
                Indusvalley INC
            </h1>
            <img src={Indusvalley} alt="react logo" />
        <h4> Trust comes with time</h4>
        <p>Everyday at Indusvalley, we wake up with one sole focus - to provide our clients with the best IT
            solutions and help them optimize their operations. <br></br>

            Since 1996, we have devoted our expertise to understanding client needs to find the best solution or
            build them one if none is available. We simply don't believe in impossible challenges. We are especially
            adept at offering our clients customized solutions for their unique needs.
            
            And since trust comes with time, Indus Valley has grown to become the benchmark for quality IT consulting
            over the 25 years we have been in existence. No matter what you need, you can always rely on our experts to
            deliver over and above your expectations.
            </p>
            </>

        )
    }
}
export default HomePage