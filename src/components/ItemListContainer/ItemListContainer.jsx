const ItemListContainer = ({ greeting, color }) =>{
    return(
        <div className="centrado">
            <h1 className={color} >{greeting}</h1>
        </div>

    )
}

export default ItemListContainer