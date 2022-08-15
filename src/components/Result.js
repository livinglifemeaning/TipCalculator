import { useContext } from "react";
import { TipContext } from "../context/tip-context";
import classes from "./Result.module.css";
const Result = () => {
  const ctx = useContext(TipContext);
  console.log(ctx);

  const tip = ctx.tipAmount;
  const bill = ctx.billAmount;
  const people = ctx.peopleAmount;

  const reset = () => {
    ctx.setBillAmount(0); 
    ctx.setPeopleAmount(1); 
    ctx.setTipAmount(0); 
  }
  return (
    <div className={classes.resultCard}>
      <div>
      <div className={classes.section}>
        <div className={classes.left}>
          <p>Tip Amount</p>
          <p className={classes.person}>/person</p>
        </div>
        <div className={classes.right}>${people === "0" || !people ? '0.00' : (((bill/100)*tip)/people).toFixed(2)}</div>
      </div>
      <div className={classes.section}>
        <div className={classes.left}>
          <p>Total</p>
          <p className={classes.person}>/person</p>
        </div>
        <div className={classes.right}>${people === "0" || !people ? '0.00' :(bill/people).toFixed(2)}</div>
      </div>
      </div>
      <button className={classes.btn} onClick={reset} disabled={ctx.billAmount === 0 ? true: false}>Reset</button>
    </div>
  );
};
export default Result;
