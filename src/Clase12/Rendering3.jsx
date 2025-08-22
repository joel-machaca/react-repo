const Rendering3=({modoDark, clase})=>{
    //Rendering a nivel de estilos (style)
    // return(

    //     <div className="container-fluid">
    //         <div className="row">
    //             <div className="col">
    //                 <h1 style={{color:modoDark?"white":"black",backgroundColor:modoDark?"black":"white",padding:20}}>Curso de React</h1>
    //             </div>
    //         </div>
    //     </div>
    // )
    //Rendering a nivel de clases (className)
    // return(

    //     <div className="container-fluid">
    //         <div className="row">
    //             <div className="col">
    //                 <h1 className={modoDark?"text-white bg-dark p-3":"text-dark p-3"}>Curso de React</h1>
    //             </div>
    //         </div>
    //     </div>
    // )


    //Rendering a nivel de Multiples Clases (className)
    return(

        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h1 className={`${modoDark ? "text-warning bg-dark":"text-dark"} p-3 ${clase?clase:"text-decoration-line-through"}`}>Curso de React</h1>
                    <h1 className={`${modoDark ? "text-warning bg-dark":"text-dark"} p-3 ${clase && clase}`}>Curso de React</h1>
                    <h1 className={`${modoDark ? "text-warning bg-dark":"text-dark"} p-3 ${clase || "text-decoration-line-through"}`}>Curso de React</h1>
                </div>
            </div>
        </div>
    )
}
export default Rendering3