import styles from './create-new-client.module.css';
import Header from '../../common/header';

export function CreateNewClient() {
  return (
    <div className={styles['container']}>
      <Header></Header>
      <h1>Welcome to CreateNewClient!</h1>
    </div>
  );
}

export default CreateNewClient;
