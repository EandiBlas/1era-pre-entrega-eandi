const products = [
    {name: "Samsung Galaxy S21", desc:"6GB de RAM", idCat: "1", price: 472, id: "1", img:"../img/1.png" },
    {name: "Samsung Galaxy S20", desc:"6GB de RAM", idCat: "1", price: 396, id: "2", img:"../img/2.png" },
    {name: "Apple iPhone 14 Pro", desc:"6GB de RAM", idCat: "2", price: 738, id: "3", img:"../img/3.png" },
    {name: "Apple iPhone 11", desc:"6GB de RAM", idCat: "2", price: 658, id: "4", img:"../img/4.png" },
    {name: "Huawei P50 Pro", desc:"6GB de RAM", idCat: "3", price: 1300, id: "5", img:"../img/5.png" },
    {name: "Huawei P40 Pro", desc:"6GB de RAM", idCat: "3", price: 810, id: "6", img:"../img/6.png" },
    {name: "Xiaomi 12T Pro", desc:"6GB de RAM", idCat: "4", price: 821, id: "7", img:"../img/7.png" },
    {name: "Xiaomi 11 Pro", desc:"6GB de RAM", idCat: "4", price: 425, id: "8", img:"../img/8.png" },
];

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout( () => {
            resolve(products)
        }, 200)
    })
}

export const getProduct = (id) => {
    return new Promise ( resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id);
            resolve(product);
        }, 200);
    })
}

export const getProductByCategory = (idCategory) => {
    return new Promise ( resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.idCat === idCategory);
            resolve(productsCategory);
        }, 200);
    })
}