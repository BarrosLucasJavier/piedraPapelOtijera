import Score from '../../components/Score';
import Selection from '../../components/Selection';
import styles from './home.module.css'

const Home = () => {

    return (
        <main className={styles.homeContainer}>
            <Score/>
            <Selection/>
            <button>RULES</button>
        </main>
    );
}

export default Home;
