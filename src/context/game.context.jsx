import { createContext, useState } from "react";
import PropTypes from 'prop-types'



export const GameContext = createContext();

export const GameProvider = ({children}) =>{

    const [option, setOption] = useState("");

    const gameValues = {
        option,
        setOption
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
