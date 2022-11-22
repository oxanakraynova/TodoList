import classes from "./Card.module.css";

const Card = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div
      className={`${classes.card} ${props.className}`}
      onClick={deleteHandler}
    >
      {props.children}
    </div>
  );
};

export default Card;
