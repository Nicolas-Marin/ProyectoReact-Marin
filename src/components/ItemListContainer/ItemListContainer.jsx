import { useState, useEffect } from "react"
import { getProducts, getProductByCategory } from "../../asyncMook"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting, color }) =>{
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts;

        asyncFunc( categoryId)
        .then(Response => {
            setProducts(Response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    return(
        <div className="centrado">
            <h1 className={color} >{greeting}</h1>
            <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer