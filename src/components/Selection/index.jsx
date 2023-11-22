import { useGame } from "../../hooks/game.hooks";
import { images } from "../../utils/img.utils";
import styles from './selection.module.css'
import Choose from "../Choose";

const Selection = () => {

    const { triangle, rock, paper, scissors } = images;
    const { option, setOption, selected, setSelected } = useGame();

    const handleOption = (opt) => {
        setOption({
            ...option,
            user: opt
        })
        setSelected(true)
    }

    return (
        <>
            {!selected && (
                <section className={styles.selectionContainer}>
                    <div className={styles.imagesContainer}>
                        <img className={styles.triangle} src={triangle} />
                        <div className={`${styles.imgContainer} ${styles.rock}`}>
                            <img src={rock} onClick={() => handleOption("rock")} />
                        </div>

                        <div className={`${styles.imgContainer} ${styles.paper}`}>
                            <img src={paper} onClick={() => handleOption("paper")} />
                        </div>

                        <div className={`${styles.imgContainer} ${styles.scissors}`}>
                            <img src={scissors} onClick={() => handleOption("scissors")} />
                        </div>
                    </div>
                </section>
            )}
            {selected && (<Choose />)}
        </>
    );
}

export default Selection;
