import { createContext, useState } from "react";
import PropTypes from 'prop-types'



export const GameContext = createContext();

export const GameProvider = ({children}) =>{
    
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

    const [selected, setSelected] = useState(false);
    const [option, setOption] = useState({
        user:"",
        house: houseSelection()
    });


    const gameValues = {
        option,
        setOption,
        selected,
        setSelected
    }

    return (
        <GameContext.Provider value={gameValues}>
            {children}
        </GameContext.Provider>
    )
}

GameProvider.propTypes ={
    children: PropTypes.node.isRequired
}
