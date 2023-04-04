import axios from "axios";
import { FormEvent, useEffect, useState, useContext } from "react";
import { GuessesContext } from "../../context/GuessesContext";
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
    const {guess} = useContext(GuessesContext);
    const [guesses, setGuesses] = useState<Guess[]>([]);
    let guessLength = guess.length

    function handleCreateGuesses(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        const name = data.name
        const phoneNumber = data.phoneNumber
        const validate = data.validate
        
        if(guessLength > 7){
            alert("Foi inserido mais de 7 resultado, atualize a página e insira novamente.")
        } else {
            try {
                axios.post('http://localhost:3333/createGuesses', {name, phoneNumber, validate, guess})
                
                alert("Palpite cadastrado com sucesso!")
            } catch {
                alert("Erro ao cadastrar palpite!")
            }
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3333/getClashes')
            .then(response => {
                setGuesses(response.data)     
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    return(
        <div className="h-screen flex flex-col">
            <CreateHeader />
            
            <div className="w-auto h-auto p-2 flex-1 ">
                <form className="p-2" onSubmit={handleCreateGuesses}>
                    <div className="flex flex-col items-center mb-5">
                        <label className="text-white text-left text-dm mb-1">
                            Nome
                        </label>
                        <input 
                            type="text" 
                            className="bg-transparent border 
                                border-white rounded text-sm text-white text-center p-0"
                            name="name"
                            id="name"
                            required
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
                            name="phoneNumber"
                            id="phoneNumber"
                            required
                        />
                    </div>

                    {guesses.map(guess => {
                        return(
                            <SetGuesses 
                                key={guess.id}
                                clubA={guess.clubA}
                                clubB={guess.clubB}
                                id={guess.id}
                            />
                        )
                    })}
                    
                    <div className="flex flex-grow space-x-2 mt-6 justify-center py-1">
                        <span className="text-white text-left text-dm">Validação</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                name="validate" 
                                id="validate" 
                                className="sr-only peer" 
                            />
                            <div 
                                className="w-11 h-5 
                                bg-transparent
                                rounded-lg border
                                border-white
                                peer-checked:after:translate-x-full 
                                peer-checked:after:border-black
                                after:content-[''] after:absolute 
                                after:top-[2px] after:left-[6px] 
                                after:bg-indigo-300 after:border-gray-900 
                                after:border after:rounded-full after:h-4 
                                after:w-4 after:transition-none
                                peer-checked:border-black
                                peer-checked:bg-sky-200">
                            </div>
                        </label>
                    </div>

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