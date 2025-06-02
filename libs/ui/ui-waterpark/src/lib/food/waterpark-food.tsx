import styles from './waterpark-food.module.css';
import Header from '../common/header';

export function Food() {
  return (
    <div className={styles['container']}>
      <Header></Header>
      <h1>Welcome to Food!</h1>
    </div>
  );
}

export default Food;
