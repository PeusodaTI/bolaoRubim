import axios from "axios";
import { useEffect, useState } from "react";
import { CreateFooter } from "../../shared/componentes/footer/CreateFooter";
import { CreateHeader } from "../../shared/componentes/header/CreateHeader";
import { SetGuesses } from "./SetGuesses";

interface Guess {
    id: string;
    clubA: string;
    clubB: string;
    date: Date;
    round: string;
}

export function CreateGuesses() {

    const [guesses, setGuesses] = useState<Guess[]>([])

    useEffect(() => {
        axios.get('http://localhost:3333/createGuess')
            .then(response => {
                setGuesses(response.data)  
                console.log(guesses)      
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    return(
        <div className="h-screen flex flex-col">
            <CreateHeader />
            
            <div className="w-auto h-auto p-2 flex-1 ">
                <form className="p-2 ">
                    <div className="flex flex-col items-center mb-5">
                        <label className="text-white text-left text-dm mb-1">
                            Nome
                        </label>
                        <input 
                            type="text" 
                            className="bg-transparent border 
                                border-white rounded text-sm text-white text-center p-0"
                        />
                        <label 
                            className="text-white text-left text-dm mt-3 mb-1"
                        >
                            Telefone
                        </label>
                        <input 
                            type="text" 
                            className="bg-transparent border-white border 
                            rounded text-sm text-white text-center p-0"
                        />
                    </div>

                    {guesses.map(guess => {
                        return(
                            <SetGuesses 
                                key={guess.id}
                                clubA={guess.clubA}
                                clubB={guess.clubB}
                            />
                        )
                    })}
                    
                    <div className="flex justify-center mt-4 mb-3">
                        <button 
                            className="rounded-sm bg-cyan-100 hover:bg-cyan-300 
                            p-1 text-mm font-semibold mt-10"
                        >
                            Cadastrar Palpite
                        </button>
                    </div>
                </form>
            </div>
            
            <CreateFooter />
        </div>
    )
}