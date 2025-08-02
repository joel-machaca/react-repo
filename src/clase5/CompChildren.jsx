const CompChildren =(props)=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1 className=" text-white fst-italic fw-bold bg-dark display-3">{props.titulo1}</h1>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default CompChildren