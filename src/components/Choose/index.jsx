import { useEffect, useState } from "react";
import { useGame } from "../../hooks/game.hooks";
import { images } from "../../utils/img.utils";
import styles from './choose.module.css'

const Choose = () => {

    const { option, setSelected, selected } = useGame()
    const [result, setResult] = useState("");
    const [selecting, setSelecting] = useState(true);

    useEffect(() => {
        setResult(loseOrWin())
        let delay = setInterval(() => {
            setSelecting(false)
            console.log("control");
            clearInterval(delay)
        }, 2000);
    }, []);

    const loseOrWin = () => {

        switch (option.user) {
            case "rock":
                if (option.house === "rock") {
                    return "TIE"
                } else if (option.house === "paper") {
                    return "YOU LOSE"
                } else {
                    return "YOU WIN"
                }
            case "paper":
                if (option.house === "paper") {
                    return "TIE"
                } else if (option.house === "scissors") {
                    return "YOU LOSE"
                } else {
                    return "YOU WIN"
                }
            case "scissors":
                if (option.house === "scissors") {
                    return "TIE"
                } else if (option.house === "rock") {
                    return "YOU LOSE"
                } else {
                    return "YOU WIN"
                }
            default:
                break;
        }
    }

    return (
        <section className={styles.chooseContainer}>
            <div className={styles.selectionContainer}>
                <div className={`${styles.imagesContainer} ${styles[option.user]} ${result === "YOU WIN" && !selecting ? styles.light : ""}`}>
                    <img src={images[option.user]} alt={option} />
                </div>
                <p>YOU PICKED</p>
            </div>
            {!selecting ? (
                <>
                    <div className={styles.resultContainer}>
                        <h2>{result}</h2>
                        <button className={styles.resultButton} onClick={() =>setSelected(!selected)}>PLAY AGAIN</button>
                    </div>
                    <div className={styles.selectionContainer}>
                        <div className={`${styles.imagesContainer} ${styles[option.house]} ${result === "YOU LOSE" ? styles.light : ""}`}>
                            <img src={images[option.house]} />
                        </div>
                        <p>THE HOUSE PICKED</p>
                    </div>
                </>)
                :
                (<>
                    <div className={styles.selectionContainer}>
                        <div className={`${styles.imagesContainer} ${styles.neutral}`}>
                        </div>
                        <p>THE HOUSE PICKED</p>
                    </div>
                </>)}
        </section>
    );
}

export default Choose;
