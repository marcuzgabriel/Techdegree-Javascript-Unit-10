
/* Readme
This file consist of many different dispatch types. Dispatch types is the way a reducer knows exacly what data
it should accept and throw back to the component. It is a good idea to make a constants folder where you seperate 
the different types in headlines. This app has more than 20+ types which would have made it very confusing if they 
where all located in one big file. */

// Import the types
import { COURSETYPE } from './constants/course.constants';
import { USERTYPE} from './constants/user.constants';

// Export them for the reducers
export { 
    COURSETYPE,
    USERTYPE
}






