import {useContext, useState} from 'react'; 

import classes from "./Tip.module.css";
import {TipContext} from '../context/tip-context';

const Tip = () => {
  const [selectedValue, setSelectedValue] = useState(null); 
  const [customValue, setCustomValue] = useState(''); 
  const ctx = useContext(TipContext); 

  const handleRadioChange = (e) =>{
    ctx.setTipAmount(e.target.value); 
  }

  const handleCustomChange = (e) =>{
    ctx.setTipAmount(e.target.value); 
    setCustomValue(e.target.value); 
  }
  
  const uncheckRadio = () =>{
    setSelectedValue(null)
  }

  return (
    <form className={classes.tipForm}>
      <p className={classes.title}>Select Tip %</p>
      <div className={classes.options}>
        {[5, 10, 15, 25, 50].map((percent) => {
          return (
            <div className={classes.option} key={percent}>
              <input type="radio" name="percent" value={percent} id={percent} checked={selectedValue === percent} onClick={()=>{setSelectedValue(percent); setCustomValue('')}} onChange={handleRadioChange}/>

              <label htmlFor={percent}>{percent}%</label>
            </div>
          );
        })}
        <div className={classes.custom} onClick={uncheckRadio}>
          <input type="number" name="custom" placeholder="Custom" onChange={handleCustomChange} value={customValue}/>
        </div>
      </div>
    </form>
  );
};

export default Tip;
