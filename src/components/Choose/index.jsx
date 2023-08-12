import { useEffect, useState } from "react";
import { useGame } from "../../hooks/game.hooks";
import { images } from "../../utils/img.utils";
import styles from './choose.module.css'
const Choose = () => {

    const { option } = useGame()
    const [houseOption, setHouseOption] = useState("");
    

    useEffect(() => {
        houseSelection();
    }, []);
    
    const houseSelection = () =>{
        const selected = +Math.floor(Math.random() * 3);
        setHouseOption(images[Object.keys(images)[selected]]);
    }
    return (
        <section className={styles.chooseContainer}>
            <div>
                <img src={images["rock"]} alt={option}/>
                <p>YOU PICKED</p>
            </div>
            <div>
                <img src={houseOption}/>
                <p>THE HOUSE PICKED</p>
            </div>
        </section>
    );
}

export default Choose;
