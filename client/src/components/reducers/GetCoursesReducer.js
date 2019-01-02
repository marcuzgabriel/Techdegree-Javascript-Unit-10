import { 
    COURSETYPE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case COURSETYPE.GET_COURSES_SUCCESS:
            return action.payload;
        case COURSETYPE.GET_COURSES_FAILURE:
            return action.payload;
        default:
            return state;
    }
}