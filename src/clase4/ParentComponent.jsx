const ParentComponent=({texto})=>{
    const handleClick = (texto)=>{
        console.log(texto)
    }
    return(
        <Boton callback={()=>{handleClick(texto)}}/>
    )
}

const Boton=({callback})=>{
    return(
        <button className="btn btn-primary" onClick={callback}>hacer Click!</button>
    )
}
export default ParentComponent