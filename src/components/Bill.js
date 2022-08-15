import {useRef} from 'react'; 
import Form from './Form'; 
import Dollar from '../assets/icon-dollar.svg'; 

const Bill = () => {
    const billInputRef = useRef();  
    return (
        <Form label="Bill" placeholder="00.00" icon={Dollar} ref={billInputRef}/>
    )
}

export default Bill; 