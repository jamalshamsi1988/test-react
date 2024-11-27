import styles from "./Card.module.css"
const Card = ({ data: { name, number } }) => {
    // const { name, number } = props.data;
  return (
    <div>
      <div  className={styles.contaner}>
        <li>{name}</li>
        <p>{number}</p>
        
      </div>
    </div>
  );
};

export default Card;
