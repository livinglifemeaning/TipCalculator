import {useRef} from 'react'; 

import Form from "./Form";
import Person from '../assets/icon-person.svg'; 
const People = () => {
    const peopleInputRef = useRef(); 
    
    return(
        <Form label="Number of People" placeholder="1" icon={Person} min="1" max="50" ref={peopleInputRef} invalidMessage={`Can't be zero`}/>
    )
}
export default People; 