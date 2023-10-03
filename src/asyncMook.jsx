const products =[
    {
        id: '1',
        name: 'Ryzen 9 5950X',
        price: '456.200',
        category:'componentes',
        img:'https://fullh4rd.com.ar/img/productos/1/micro-amd-ryzen-9-5950x-scooler-svideo-0.jpg',
        stock: 18,
        desciption:'Ryzen 9 5950X FullBox'
    },
    {
        id: '2',
        name: 'Nvidia RTX 3080',
        price: '685.900',
        category:'componentes',
        img:'https://www.topcomputacion.com.ar/wp-content/uploads/2023/06/gigabyte_geforce_rtx_3080_ti_gaming_12gb_gddr6x_oc1.jpg',
        stock: 8,
        desciption:'Nvidia RTX 3080 FullBox'
    },
    {
        id: '3',
        name: 'GTX 1660ti',
        price: '256.200',
        category:'componentes',
        img:'https://smarts.com.ar/media/catalog/product/cache/e2fffb2b85fe85187f9dedbb6434d061/g/v/gv-n166toc-6gd_ok_1.jpg',
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