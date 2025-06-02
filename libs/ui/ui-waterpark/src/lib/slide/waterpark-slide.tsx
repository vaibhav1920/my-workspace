import styles from './waterpark-slide.module.css';
import Header from '../common/header';
export function Slide() {
  return (
    <div className={styles['container']}>
      <Header></Header>
      <h1>Welcome to Slide!</h1>
    </div>
  );
}

export default Slide;
