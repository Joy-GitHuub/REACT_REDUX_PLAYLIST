export interface productInterFace {
    id: number,
    name: string,
    price: number,
};
 
export interface initialStateInterFace {
    products: productInterFace[],
    numberOfProducts: number,
};

export interface initialCartInterFace {
    cart: productInterFace[],
    numberOfProducts: number,
}

export interface actionInterFace {
    type: string,
    payload?: any,
};