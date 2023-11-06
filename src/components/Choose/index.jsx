import { useEffect, useState } from "react";
import { useGame } from "../../hooks/game.hooks";
import { images } from "../../utils/img.utils";
import styles from './choose.module.css'
const Choose = () => {

    const { option } = useGame()
    const [houseOption, setHouseOption] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        setHouseOption(houseSelection());
        setResult(loseOrWin())
    }, []);

    const loseOrWin = () => {

        switch (option) {
            case "rock":
                if (houseOption === "rock") {
                    return "tie"
                } else if (houseOption === "paper") {
                    return "lose"
                } else {
                    return "win"
                }
            case "paper":
                if (houseOption === "paper") {
                    return "tie"
                } else if (houseOption === "scissors") {
                    return "lose"
                } else {
                    return "win"
                }
            case "scissors":
                if (houseOption === "scissors") {
                    return "tie"
                } else if (houseOption === "rock") {
                    return "lose"
                } else {
                    return "win"
                }
            default:
                break;
        }
    }

    const houseSelection = () => {
        const selected = +Math.floor(Math.random() * 3);
        switch (selected) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";          
        }
    }
    return (
        <section className={styles.chooseContainer}>
            <div className={styles.selectionContainer}>
                <div className={`${styles.imagesContainer} ${styles[option]}`}>
                    <img src={images[option]} alt={option} />
                </div>
                <p>YOU PICKED</p>
            </div>
            <div className={styles.selectionContainer}>
                <div className={`${styles.imagesContainer} ${styles[houseOption]}`}>
                    <img src={images[houseOption]} />
                </div>
                <p>THE HOUSE PICKED</p>
            </div>
            <h2>{result}</h2>
        </section>
    );
}

export default Choose;
