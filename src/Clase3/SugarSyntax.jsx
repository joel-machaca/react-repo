const SugarSyntax=()=>{

    //forma clasica
    // const condicion = true;
    // let resultado =true;

    // if (condicion) {
    //     resultado ="poder tomar alcohol"
    // }else{
    //     resultado="no,No podes tomar alcohol... voy a llamar a la policia"
    // }


    // sugar syntax
    // let edad =14
    // const condicion = edad >18;
    // let resultado =condicion? "poder tomar alcohol":"no,No podes tomar alcohol... voy a llamar a la policia";


    // variables con valor por copia(valido con variables primitivas string, number y boolean)

    // let precio= 2000;
    // let nuevoPrecio= precio;
    // console.log(precio);
    // console.log(nuevoPrecio);
    // nuevoPrecio=4000
    // console.log(nuevoPrecio);
    
    // variables con valor por referencia
    // let bebida1={id:1,nombre:"coca cola", precio:2200};
    // let bebida2=bebida1 //variable con valor por referencia (no es indepentdiente, tiene la referencia al objeto original)
    // console.log(bebida1);
    // console.log(bebida2);
    // bebida1.precio=5000;
    // bebida2.nombre="MANAOS"
    // console.log(bebida1);
    // console.log(bebida2);

    // ¿como puedo crear un nuevo objeto con los valores del objeto original y que sea independiente?
    // let bebida3={imagen:"manaos.jpg",...bebida1,id:3,nombre:"Manaos cola",categoria:"bebidas"}; //crear un nuevo objeto con las propiedades del objeto original
    // bebida3.precio=7000;
    // console.log(bebida1);
    // console.log(bebida2);
    // console.log(bebida3);

    // arrays
    // const bebidas1=["coca cola","Pepsi", "seven up"]
    // const bebidas2=bebidas1//variable con valor por referencia (No es independiente, tiene la referencia al array original)
    // bebidas1[2]="sprite"
    // console.log(bebidas1);
    // console.log(bebidas2);
    // ¿como puedo crear un nuevo objeto con los valores del objeto original y que sea independiente?
    // forma tradicional
    // const bebidas3 =[bebidas1[0],bebidas1[0],bebidas1[0],] //crear un nuevo array (independiente)
    // bebidas3[0]="cunnington cola"
    // console.log(bebidas3)

    //operador spread
    // const bebidas3=[...bebidas1]
    // bebidas3[1]="Pepsi Max"
    // console.log(bebidas1)
    // console.log(bebidas2)
    // console.log(bebidas3)

    // desestructuracion
    // let bebida1={id:1,nombre:"coca cola", precio:2200};
    // let {nombre, precio}=bebida1
    // console.log(nombre)
    // console.log(precio)






    // JSX
    // let texto="Hola a todos!!!"
    // let precio=2000;
    // let edad=14


        
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>Sugar Syntax</h1>
                    {/* <p>{resultado}</p> */}
                    
                </div>
            </div>
        </div>
    )
}

export default SugarSyntax
// 1.4.30