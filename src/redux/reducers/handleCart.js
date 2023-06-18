const cart = [];

const handleCart = (state = cart,action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if Product Already Exist
            const exist = state.find((x)=> x.id === product.id);
            if(exist){
                // Increase the Quantity 
                return state.map((x)=>x.id === product.id ? {...x,qty:x.qty +1} : x); // retourn x when x.id != product.id
            }else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            //break;

            case "DELITEM":
                const exist2 = state.find((x)=> x.id === product.id);
                if(exist2.qty === 1){
                    // Increase the Quantity 
                    return state.filter((x)=>x.id !== exist2.id );
                }else {
                    return state.map((x)=>x.id === product.id ? {...x,qty:x.qty - 1} : x); // retourn x when x.id != product.id
                }
                //break;
    
        default:
            return state;
            //break;
    }
}
export default handleCart;