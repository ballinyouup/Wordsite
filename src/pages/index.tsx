import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>
        Welcome to the Dictionary App!
        <br />
        Enter a word to search!
        <br />
        <img src="https://cdn-icons-png.flaticon.com/512/4072/4072217.png" />
      </h2>
    </div>
  );
};

export default Home;
