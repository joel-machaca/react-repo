const Item =({item})=>{
    return(
        <div className="col-md-3 mb-4">
            <div className="card border-0 text-center shadow">
                <img src={item.image} className="card-img-top" alt={item.title}/>
                <div className="card-body">
                    <p>{item.title}</p>
                </div>
            </div>
        </div>

    )
}
export default Item