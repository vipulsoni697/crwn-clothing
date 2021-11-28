import CartActionTypes from "./cart.types";

function toggleCartHidden()
{
    return{
        type:CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

function addItem(item)
{
    return{
        type:CartActionTypes.ADD_ITEM,
        payload:item
    }
}

export {toggleCartHidden, addItem};