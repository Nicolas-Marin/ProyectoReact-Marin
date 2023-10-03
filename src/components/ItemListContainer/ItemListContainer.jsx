import { useState, useEffect } from "react"
import { getProducts } from "../../asyncMook"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting, color }) =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className="centrado">
            <h1 className={color} >{greeting}</h1>
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer