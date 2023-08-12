import { useGame } from "../../hooks/game.hooks";
import { images } from "../../utils/img.utils";
import styles from './selection.module.css'

const Selection = () => {

    const {triangle, rock, paper, scissors} = images;
    const { setOption } = useGame();

    return (
        <section className={styles.selectionContainer}>
            <div className={styles.imagesContainer}>
                <img className={styles.triangle} src={triangle} />
                <div className={`${styles.imgContainer} ${styles.rock}`}>
                    <img  src={rock} onClick={()=>setOption("rock")}/>
                </div>

                <div className={`${styles.imgContainer} ${styles.paper}`}>
                    <img src={paper} onClick={()=>setOption("paper")}/>
                </div>

                <div className={`${styles.imgContainer} ${styles.scissors}`}>
                    <img src={scissors} onClick={()=>setOption("scissors")}/>
                </div>
            </div>
        </section>
    );
}

export default Selection;
