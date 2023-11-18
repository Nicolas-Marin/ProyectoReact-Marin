const products =[
    {
        id: '1',
        name: 'Ryzen 9 5950X',
        price: '456.200',
        category:'procesadores',
        img:'https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-9-5950x-scooler-svideo-0.jpg',
        stock: 18,
        desciption:'Ryzen 9 5950X FullBox'
    },
    {
        id: '2',
        name: 'Nvidia RTX 3080',
        price: '685.900',
        category:'graficasrtx',
        img:'https://www.topcomputacion.com.ar/wp-content/uploads/2023/06/gigabyte_geforce_rtx_3080_ti_gaming_12gb_gddr6x_oc1.jpg',
        stock: 8,
        desciption:'Nvidia RTX 3080 FullBox'
    },
    {
        id: '3',
        name: 'GTX 1660ti',
        price: '256.200',
        category:'graficasgtx',
        img:'https://static.gigabyte.com/StaticFile/Image/Global/30623baf40e8e9dec2e341ed03fbad04/Product/23151/Png',
        stock: 12,
        desciption:'GTX 1660ti FullBox'
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(products.find(prod => prod.id === productId))
    },500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };