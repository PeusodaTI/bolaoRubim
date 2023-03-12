import { createContext, useState } from "react";

interface SetGuessesProps {
    handleGuesses(id: string): void;
    setResultClubA: React.Dispatch<React.SetStateAction<number>>;
    setResultClubB: React.Dispatch<React.SetStateAction<number>>;
    guess: GuessesProps[];
}

interface GuessesProps {
    id: string;
    clubA: number;
    clubB: number;
}

export const MyContext = createContext<SetGuessesProps>({} as SetGuessesProps);

export function MyProvider({children}) {
    const [guess, setGuess] = useState<GuessesProps[]>([])
    const [resultClubA, setResultClubA] = useState<number>(0)
    const [resultClubB, setResultClubB] = useState<number>(0)

    function handleGuesses(id: string) {
        let guesses = {
            id: id,
            clubA: resultClubA,
            clubB: resultClubB,
        };
        setGuess(prevState => [...prevState, guesses]);   
    }

    return(
        <MyContext.Provider 
            value={{handleGuesses, setResultClubA, setResultClubB, guess}}
        >
            {children}
        </MyContext.Provider>
    );
}

