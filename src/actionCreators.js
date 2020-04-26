const addProduct = () => {
    return  { 
        type: 'ADD_PRODUCT' 
    }
}

const subProduct = () => {
    return  { 
        type: 'SUB_PRODUCT' 
    }
}

const addClient = () => {
    return  { 
        type: 'ADD_CLIENT' 
    }
}

const subClient = () => {
    return  { 
        type: 'SUB_CLIENT' 
    }
}

export { addProduct, subProduct, addClient, subClient }
