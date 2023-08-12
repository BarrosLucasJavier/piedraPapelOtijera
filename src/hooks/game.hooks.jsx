import { useContext } from 'react';
import { GameContext } from '../context/game.context';

export function useGame() {
    return useContext(GameContext)
} 