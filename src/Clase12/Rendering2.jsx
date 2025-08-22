const Rendering2=({mostrar})=>{

    // if(mostrar){
    //     return(
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col">
    //                     <h1 className="fw-bold">Curso de React JS</h1>
    //                 </div>
    //             </div>
    //         </div>
    //     )

    // }
    // return(
    //     <div className="container">
    //         <div className="row">
    //             <div className="col">
    //                 <h1 className="fw-bold">Curso de Javascript JS</h1>
    //             </div>
    //         </div>
    //     </div>
    // )

    //Tecnica #2
    // return(

    //     <div className="container p-5">
    //         <div className="row">
    //             <div className="col">
    //                 {mostrar &&<h1 className="fw-bold">Curso de React JS</h1>}
    //                 {!mostrar &&<h1 className="fw-bold">Curso de Javascript JS</h1>}
    //             </div>
    //         </div>
    //     </div>
    // )


    //Tecnica #3
    return(

        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <h1 className="fw-bold">{mostrar?"Curso de React JS":"Curso de Javascript"}</h1>
                </div>
            </div>
        </div>
    )
}
export default Rendering2;