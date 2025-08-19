import { useState } from "react";

const Select=({option,options,optionSelected})=>{
    return(
        <select onChange={(e)=>optionSelected(e.target.value)} value={option} className="form-select">
            {
                options.map(item=>(
                    <option key={item.id} value={item.id}>{item.texto}</option>
                ))
            }
        </select>
    )
}

const Abstraccion1=()=>{

    const [option,setOption]=useState(2)
    const options=[
        {id:1, texto:"azul"},
        {id:2, texto:"rojo"},
        {id:3, texto:"rosa"}
    ]
    const optionSelected=(value)=>{
        setOption(value);
    }
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Abstraccion #1</h1>
                    <Select option={option} options={options} optionSelected={optionSelected}/>
                    <p>opcion seleccionada <b>{option}</b></p>
                </div>
            </div>
        </div>
    )
}
export default Abstraccion1;