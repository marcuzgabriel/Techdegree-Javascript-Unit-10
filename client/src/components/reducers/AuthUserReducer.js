import { 
    USERTYPE
} from "../actions/types";

export default function(state = false, action) {
    switch (action.type) {
        
        case USERTYPE.AUTH_SUCCESS:
            return action.payload || false;
        case USERTYPE.AUTH_FAILURE:
            return action.payload || false;
        case USERTYPE.AUTH_LOGOUT:
            return action.payload || false;
        default:
            return state;
    }
}