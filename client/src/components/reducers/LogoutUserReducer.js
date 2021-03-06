import { 
    USERTYPE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case USERTYPE.LOGOUT_REQUEST:
            return action.payload;
        case USERTYPE.LOGOUT_SUCCESS:
            return action.payload;
        case USERTYPE.LOGOUT_FAILURE:
            return action.payload;
        default:
            return state;
    }
}