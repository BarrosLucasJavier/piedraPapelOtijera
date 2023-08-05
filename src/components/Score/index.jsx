import { images } from '../../utils/img.utils'
import styles from './score.module.css'


const Score = () => {

    const {logo} = images;

    return (
        <section className={styles.scoreContainer}>
                <div className={styles.imgContainer}>
                    <img src={logo} />
                </div>
                <div className={styles.scorePoints}>
                    <p>SCORE</p>
                    <span>12</span>
                </div>
            </section>
    );
}

export default Score;
