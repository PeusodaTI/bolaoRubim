import axios from "axios";
import { FormEvent, useEffect, useState, useContext } from "react";
import { MyContext } from "../../context/MyContext";
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

    function handleCreateGuesses(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        console.log(data)
    }

    const [guesses, setGuesses] = useState<Guess[]>([]);
    const [name, setName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const {guess} = useContext(MyContext);
    console.log(name)
    console.log(phoneNumber)
    console.log(guess)

    useEffect(() => {
        axios.get('http://localhost:3333/getClashes')
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
                            onChange={e => setName(e.target.value)}
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
                            onChange={e => setPhoneNumber(e.target.value)}
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