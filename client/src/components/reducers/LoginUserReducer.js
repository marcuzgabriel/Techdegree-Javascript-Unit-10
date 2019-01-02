import { 
    USERTYPE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case USERTYPE.LOGIN_REQUEST:
            return action.payload
        case USERTYPE.LOGIN_SUCCESS:
            return action.payload
        case USERTYPE.LOGIN_FAILURE: 
            return action.payload
        default:
            return state;
    }
}