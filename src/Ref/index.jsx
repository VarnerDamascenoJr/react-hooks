import { useRef, useState } from "react"

const HowToUseRef=()=>{

    const[count, setCount] = useState(0)
    const countRef = useRef(0)

    const handleAdd = () =>{
        setCount(count + 1)
        countRef.current++
//This is a simple test for me
        console.log("count:"+count)
        console.log("countRef:"+countRef.current)
    }
    return(
        <div>
            Count:{count}, {countRef.current}
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}

export default HowToUseRef
