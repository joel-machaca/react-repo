// const arrayTareas=["Levantarme de la cama", "desayunar","ir al trabajo","trabajar","almorzar","Pagar la suscripcion de OF"];
// const arrayTareasProgramacion=["Desarrollo Web", "Javascript","React JS"];


// const ListaTareas=({tareas})=>{
    //     return (
        //         <ul className="list-group my-4">
        //             {
            //                 tareas.map(item=>(
                //                     <Tarea key={item} nombre={item}/>
                //                 ))
                //             }
                //         </ul>
                //     )
                // }
                
                // const Tarea=({nombre})=>{
                    //     return(
                        //         <li className="list-group-item list-group-item-action">{nombre}</li>
                        //     )
                        // }
                        
                        // const RenderProps=()=>{
                            //     return(
                                //         <div className="container my-5">
                                //             <div className="row">
                                //                 <div className="col-md-6">
                                //                     <h1>Render Props</h1>
                                //                     <ListaTareas tareas={arrayTareas}/>
                                //                     <ListaTareas tareas={arrayTareasProgramacion}/>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     )
                                // }
import { useState } from "react"

const tasks=[
    {id:1,nombre:"desayunar",estado:"Completado"},
    {id:2,nombre:"Ir a trabajar",estado:"Completado"},
    {id:3,nombre:"Trabajar",estado:"Completado"},
    {id:4,nombre:"Almorzar",estado:"noCompletado"},
    {id:5,nombre:"Merendar",estado:"noCompletado"},
    {id:6,nombre:"Cenar",estado:"noCompletado"},
]

const TaskList=({tasks})=>{
    return(
        <ul className="list-group my-5">
            {
                tasks.map(item=>(
                    <li key={item.id} className="list-group-item list-group-item-action">{item.nombre}</li>
                ))
            }
        </ul>
    )
}

const Filter =({children})=>{
    const [filterState,setFilterState]=useState("all")

    const handleFilterState=(e)=>{
        setFilterState(e.target.value)
    }
    return children(filterState,handleFilterState)
}

const RenderProps=()=>{
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>Render Props</h1>
                    <Filter>
                        {(filterState,handleFilterState)=>(
                            <>
                                <div className="row my-5">
                                    <select className="form-select" value={filterState} onChange={handleFilterState}>
                                        <option value="all">Todos</option>
                                        <option value="Completado">Completados</option>
                                        <option value="noCompletado">No completados</option>
                                    </select>
                                </div>
                                <div className="row my-5">
                                    <TaskList tasks={filterState=="all"? tasks:tasks.filter(item=>item.estado ==filterState)}/>
                                </div>
                            </>
                        )}
                    </Filter>
                </div>
            </div>
        </div>
    )
}
export default RenderProps