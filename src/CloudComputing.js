import { useState } from 'react'

const CloudComputing = () => {
    const [number , setNumber] = useState(0)
    return(
        <>
        {number === 0 && <h1> Number 0</h1>}
        {number === 1 && <h1>Number1</h1>}
        <button onClick ={ () => setNumber(1)}>Click here</button>
        </>
    )
}

export default CloudComputing
