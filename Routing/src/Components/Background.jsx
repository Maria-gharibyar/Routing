import { useParams } from "react-router-dom"

const Background=(props)=>{
    const{word,color,back}=useParams()
    return(
        <div style={{ backgroundColor: back , width:"100vw"}}>
            <h1 style={{color:color}}>The word is {word}</h1>
            {
                isNaN(word) ? `the word is ${word}`: `the number is ${word}`
            }
        </div>
    )
}
export default Background