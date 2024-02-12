import { useParams } from "react-router-dom"

const Display =(props)=>{
    const {number}=useParams();
    return(
        <>
        <h1>The number is {number}</h1>{ 
                isNaN(number) ? `the word is ${number}`: `the number is ${number}`
        }

        </>
    )
}
export default Display