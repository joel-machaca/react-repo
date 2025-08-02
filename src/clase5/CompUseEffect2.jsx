import { useEffect } from "react";

const CompUseEffect2 =()=>{
    console.log("montaje del componente#2");
    
    useEffect(()=>{
        return ()=>{
            console.log("3- Desmontaje del componente#2")
        }
    })
    return(
        <h1>Componente UseEffect #2</h1>
    )
}

export default CompUseEffect2