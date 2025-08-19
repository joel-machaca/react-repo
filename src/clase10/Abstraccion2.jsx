import { useState } from "react";

const Select=({option,options,optionSelected})=>{
    return(
        <>
            {
                options.map(item=>(
                    <div className="form-check" key={item.id}>
                        <input type="radio" name="color" value={item.id} className="form-check-input" checked={option==item.value} onChange={e=>optionSelected(e.target.value)}/>
                        <label className="form-check-label">{item.texto}</label>
                    </div>
                ))
            }   
        </>

    )
}

const Abstraccion2=()=>{

    const [option,setOption]=useState(1)
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
                    <h1>Abstraccion #2</h1>
                    <Select option={option} options={options} optionSelected={optionSelected}/>
                    <p>opcion seleccionada <b>{option}</b></p>
                </div>
            </div>
        </div>
    )
}
export default Abstraccion2;