import { useState } from "react"



export const State = () =>{

const [car, setCar] = useState("Golf")

const carModel = ()=>{
    setCar("BMW")
}
    return(
        <>
        <p onClick={carModel}>This is my {car} - Click here and the car changes</p>
        </>
    )
}