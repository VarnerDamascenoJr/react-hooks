import { useState, createContext, useContext} from "react"
    


const UserContext = createContext()

export const Main = ( )=>{

    const [name, setName] = useState("John Doe")

    
    return(
        <UserContext.Provider value={name}>
            <h1>Main Component. This is the state: {name}</h1>
            <ComponentOne name={name} />

        </UserContext.Provider>
    )
}

function ComponentOne( {name}){
    return(
        <>
            <h1>Component One. This is the state: {name}</h1>
            <ComponentTwo name={name} />
        </>
    )
}


function ComponentTwo({name} ){
    return(
        <>
            <h1>Component One. This is the state: {name}</h1>
            <ComponentThree name={name} />
        </>
    )
}

function ComponentThree({name} ){
    return(
        <>
            <h1>Component Three. This is the state: {name}</h1>
            <ComponentFour name={name} />
        </>
    )
}

function ComponentFour({name} ){
    return(
        <>
                    <h1>Component Four. This is the state: {name}</h1>
            <ComponentFive name={name} />
        </>
    )
}

function ComponentFive({name}){

    const nameUseContext = useContext(UserContext)  
        return(
            <>
            <h1>Component Five. This is the state using useContext: {nameUseContext}</h1>
            </>
        )
    }