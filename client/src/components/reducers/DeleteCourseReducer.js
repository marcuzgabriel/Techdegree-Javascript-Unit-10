import { 
    COURSETYPE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case COURSETYPE.DELETE_COURSE_SUCCESS:
            return action.payload;
        case COURSETYPE.DELETE_COURSE_FAILURE:
            return action.payload;
        default:
            return state;
    }
}