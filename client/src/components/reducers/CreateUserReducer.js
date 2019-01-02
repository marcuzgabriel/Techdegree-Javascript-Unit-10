import { 
    USERTYPE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case USERTYPE.CREATE_USER_REQUEST:
            return action.payload;
        case USERTYPE.CREATE_USER_SUCCESS:
            return action.payload;
        case USERTYPE.CREATE_USER_FAILURE:
            return action.payload;
        default:
            return state;
    }
}