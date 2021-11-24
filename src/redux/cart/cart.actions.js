import CartActionTypes from "./cart.types";
function toggleCartHidden()
{
    return{
        type:CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

export default toggleCartHidden;