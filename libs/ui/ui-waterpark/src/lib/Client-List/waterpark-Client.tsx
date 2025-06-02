import Header from '../common/header';
import styles from './waterpark-Client.module.css';
import Button from '@mui/material/Button';
import { useEffect , useState } from 'react';
import { useNavigate} from 'react-router-dom'
type User = {
  clientId: number;
  firstname: string;
  lastname: string;
  address: string;
  checkin_time: string;
  checkout_time: string;
  date_added_entry: string;
  date_modified: string;
  // add other fields based on your API
};


export function UiWaterpark() {
  const navigate = useNavigate();
  const[users ,setUsers] = useState<User[]>([]);
  const[loading,setLoader] = useState(true);

  const handleNewClick = () => {
    navigate('../createnewclient')
  }
  useEffect(() => {
    fetch('https://localhost:7240/WaterParkClient')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoader(false);
    });
  },[]);
  if (loading) return <p>Loading...</p>;

  return (
    <div className={styles['container']}>
      <Header></Header>
      <div className='row mt-4'>
        <div className='col-md-10 d-flex justify-content-end mb-2'>
          <Button variant="contained" color="primary" onClick={handleNewClick}>Create New Client</Button>
        </div>
        <div className='col-md-2 mb-2'></div>
        <div className='col-md-2'></div>
        <div className='col-md-8 border'>
          <table className={'table-bordered'}>
        <tr>
            <th> First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Checkin Time</th>
            <th>Checkout Time</th>
            <th>Date Added Entry</th>
            <th>Date Modified</th>
        </tr>
        {users.map(user => (
          <tr>
            <td key={user.clientId}>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.address}</td>
            <td>{user.checkin_time}</td>
            <td>{user.checkout_time}</td>
            <td>{user.date_added_entry}</td>
            <td>{user.date_modified}</td>
          </tr>
        ))}
        </table>
        </div>
        <div className='col-md-2'></div>
        </div>
      
    </div>
  );
}

export default UiWaterpark;
