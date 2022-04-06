//FOR ADD AN ITEM TO CART
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product,
    }
}
//FOR DELETE AN ITEM FROM CART
export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product,
    }
}