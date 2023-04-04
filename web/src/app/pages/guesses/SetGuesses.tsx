import { useContext } from "react";
import { GuessesContext } from "../../context/GuessesContext";

interface SetGuessesProps {
    id: string;
    clubA: string;
    clubB: string;
}

export function SetGuesses(props: SetGuessesProps) {
    const {handleGuesses, setResultClubA, setResultClubB} = useContext(GuessesContext)

    return (
        <div className="flex justify-center mb-2">           
            <div className="w-1/3 h-auto text-center sm:text-right">
                
                <label 
                    className="text-white text-mm uppercase"
                >
                    {props.clubA}
                </label>
            </div>

            <div className="flex-grow space-x-1 sm:space-x-5 h-auto text-center">
                <input 
                    type="number" 
                    className="sm:text-right text-sm text-center 
                        backdrop-blur-sm w-8 rounded bg-transparent 
                        border border-white text-white"
                    id="clubA"
                    name="clubA"
                    required
                    onChange={e => setResultClubA(parseInt(e.target.value))}
                    />
                <label 
                    className="text-white text-sm"
                >
                    X
                </label>
                <input 
                    type="number" 
                    className="sm:text-right text-sm text-center 
                        backdrop-blur-sm w-8 rounded bg-transparent 
                        border border-white text-white"
                    id="clubB"
                    name="clubB"
                    required
                    onChange={e => setResultClubB(parseInt(e.target.value))}
                    onBlur={() => handleGuesses(props.id)}
                />
            </div>
            
            <div className="w-1/3 h-auto text-center sm:text-left">
                <label 
                    className="text-white text-mm uppercase"
                >
                    {props.clubB}
                </label>
            </div>
        </div>
    )
}