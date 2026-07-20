import styles from './Thumb.module.css';

export const Thumb = ({props}) => {
  console.log(props);
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={props.thumbnail} alt={props.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <small className={styles.date}>{props.date}</small>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};
