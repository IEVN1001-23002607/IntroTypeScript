import {type producto,articularISV2}from "05-desestruracion-funciones";

const carrito:Producto[=[
    {
        desc:'Telefono1',
        precio:1000
    },
    {
        desc:'telefono2',
        precio:2300
    },
    {
        desc:'telefono3',
        precio:2388
    }

]]

const[total,isv]=calcularISV2(carrito)
console.log("total carrito:", total)
console,log("isv carrito", isv)