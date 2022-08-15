import React, { useContext, useState, useEffect } from "react";
import classes from "./Form.module.css";
import { TipContext } from "../context/tip-context";

const Form = React.forwardRef((props, ref) => {
  const ctx = useContext(TipContext);
  const [invalidPeopleAmount, setInvalidPeopleAmount] = useState(false); 

  const handleChange = () => {
    if (props.label === "Bill") {
      ctx.setBillAmount(ref.current.value);
    } else if (props.label === "Number of People") {
      ctx.setPeopleAmount(ref.current.value);
    }
  };

  useEffect(()=>{
    if(ctx.peopleAmount ==="0" || ctx.peopleAmount === ''){
      setInvalidPeopleAmount(true); 
    } else{
      setInvalidPeopleAmount(false); 
    }
  }, [ctx.peopleAmount])

  console.log(invalidPeopleAmount); 
  let value;
  if (props.label === "Bill") {
    value = ctx.billAmount;
  } else if (props.label === "Number of People") {
    value = ctx.peopleAmount;
  }

  return (
    <form className={classes.form} >
      <label className={classes.label}>{props.label}</label>
      {invalidPeopleAmount && <p className={classes.errorMsg}>{props.invalidMessage}</p>}
      <div className={`${classes.input} ${invalidPeopleAmount && props.label === 'Number of People' ? classes.error : ''}`}>
        <img src={props.icon} alt="" />
        <input
          type="number"
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
          ref={ref}
          value={value}
          onChange={handleChange}
        ></input>
      </div>
    </form>
  );
});

export default Form;
