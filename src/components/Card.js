import classes from "./Card.module.css";
import Bill from "./Bill";
import Tip from "./Tip";
import People from "./People";
import Result from "./Result";

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.formDiv}>
      <Bill />
      <Tip />
      <People />
      </div>
      <div className={classes.resultDiv}>
      <Result />
      </div>
    </div>
  );
};

export default Card;
