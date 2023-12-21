import React, { useState, useMemo } from 'react'
import {initialItems} from './utils'
function HowToUseMemo() {

    const [count, setCount] = useState(0)
    const [items] = useState(initialItems)

    //const selectedItem = items.find((item)=>item.isSelected)

    const selectedItem = useMemo(
      ()=> items.find((item)=>item.isSelected)
      ,[items])
  return (
    <div>
        <h1>Count: {count}</h1>
        <h1>Selected item:{selectedItem?.id}</h1>
        <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}

export default HowToUseMemo