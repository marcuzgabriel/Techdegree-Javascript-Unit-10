import { 
    COURSETYPE
} from "../actions/types";

export default function(state = null, action) {
    switch (action.type) {
        case COURSETYPE.CREATE_COURSE_REQUEST:
            return action.payload;
        case COURSETYPE.CREATE_COURSE_SUCCESS:
            return action.payload;
        case COURSETYPE.CREATE_COURSE_FAILURE:
            return action.payload;
        default:
            return state;
    }
}