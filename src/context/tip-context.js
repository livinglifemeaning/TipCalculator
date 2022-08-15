import React, {useState} from 'react'; 

export const TipContext = React.createContext({
    billAmount: 0, 
    tipAmount: 0, 
    peopleAmount: 0, 
    setBillAmount: (bill) => {}, 
    setTipAmount: (tip) => {}, 
    setPeopleAmount: (people) => {}
}); 

const TipContextProvider = props => {
    const [billAmount, setBillAmount] = useState(0); 
    const [tipAmount, setTipAmount] = useState(0); 
    const [peopleAmount, setPeopleAmount] = useState(1); 
    const ctx = {
        billAmount, 
        tipAmount, 
        peopleAmount, 
        setBillAmount,
        setTipAmount, 
        setPeopleAmount
    }
    return (
        <TipContext.Provider value={ctx}>
            {props.children} 
        </TipContext.Provider>
    )
}

export default TipContextProvider; 