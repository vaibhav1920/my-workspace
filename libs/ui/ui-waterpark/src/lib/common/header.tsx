import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/waterparkclient">Waterpark Client List</Link>
        <Link style={styles.link} to="/food">Food Area</Link>
        <Link style={styles.link} to="/slide">Slide Area</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: 'blueviolet',
    padding: '5px 20px',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    border: '2px solid white',
    borderRadious : '2px'
  },
};

export default Header;
