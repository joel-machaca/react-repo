import { Link } from "react-router-dom"

const Item =({item})=>{
    return(
        <div className="col-md-3 mb-4">
            <Link to={'/item/'+item.id} className="text-decoration-none">
                <div className="card border-0 text-center shadow">
                    <img src={item.image} className="card-img-top" alt={item.title}/>
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}
export default Item