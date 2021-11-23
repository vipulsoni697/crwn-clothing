import UserActionTypes from "./user.types";
function setCurrentUser(user){
    return {
        type:UserActionTypes.SET_CURRENT_USER,
        payload:user
    }
}
export default setCurrentUser;