import axios from "axios"
import { useEffect, useState } from "react"
import { CreateFooter } from "../../shared/componentes/footer/CreateFooter"
import { CreateHeader } from "../../shared/componentes/header/CreateHeader"

interface Guesses {
    id: string,
    resultClubA: number,
    resultClubB: number,
    validation: boolean,
    date: string,
    Players: {
      id: string,
      name: string,
      phoneNumber: string,
      date: string,
    }
}

export const ValidateGuesses = () => {
    const [guesses, setGuesses] = useState<Guesses[]>([])
    const [isCheck, setIsChecked] = useState<Boolean>()

    console.log(isCheck)

    useEffect(() => {
        axios.get('http://localhost:3333/getGuesses')
            .then(response => {
                setGuesses(response.data)
            })
            .catch(error => {
                alert(error)
            })      
    }, [])
    console.log(guesses)
    return(
        <div className="h-screen flex flex-col">
            <CreateHeader />
            <div className="flex-1 relative overflow-x-auto bg-transparent mt-4 mb-4 sm:ml-10 sm:mr-10 md:ml-10 md:mr-10 lg:ml-16 lg:mr-16 mr-5 ml-5">
                <table className="bg-transparent w-full">
                    <thead className="">
                        <tr>
                            <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-black font-bold text-dm">Jogador</th>
                            <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-black font-bold text-dm ">Telefone</th>
                            <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-black font-bold text-dm whitespace-nowrap ">Data palpite</th>
                            <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-black font-bold text-dm ">Validação</th>
                            <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-black font-bold text-dm ">Ações</th>
                        </tr>
                    </thead>
                    <tbody >
                        {guesses.map(guess => {   
                            //setIsChecked(guess.validation)
                            return(
                                
                                <tr className="hover:bg-neutral-400 ">
                                    <td 
                                        scope="row" 
                                        className="border-b border-gray-800
                                            px-6 py-1 
                                            whitespace-nowrap 
                                            text-center 
                                            text-white 
                                            text-mm"
                                    >
                                        {guess.Players.name}
                                    </td>
                                    <td 
                                        className="border-b border-gray-800 
                                            px-6 py-1 
                                            whitespace-nowrap 
                                            text-center 
                                            text-white 
                                            text-mm"
                                    >
                                        {guess.Players.phoneNumber}
                                    </td>
                                    <td 
                                        className="border-b  border-gray-800
                                            px-6 
                                            py-1 
                                            whitespace-nowrap 
                                            text-center 
                                            text-white text-mm"
                                    >
                                        {guess.date}
                                    </td>
                                    <td className="border-b border-gray-800 px-6 py-1 text-center">
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input 
                                                type="checkbox" 
                                                name="validate" 
                                                id="validate" 
                                                className="sr-only peer" 
                                                value="true"
                                                checked={isCheck}
                                                onChange={(event) => {
                                                    setIsChecked(event.target.checked)
                                                }}
                                            />
                                            <div 
                                                className="w-10 h-4 
                                                bg-transparent
                                                rounded-lg border
                                                border-white
                                                peer-checked:after:translate-x-full 
                                                peer-checked:after:border-black
                                                after:content-[''] after:absolute 
                                                after:top-[10px] after:left-[6px] 
                                                after:bg-indigo-300 after:border-gray-900 
                                                after:border after:rounded-full after:h-3 
                                                after:w-3 after:transition-none
                                                peer-checked:border-black
                                                peer-checked:bg-sky-200 mt-2">
                                            </div>
                                        </label>
                                    </td>
                                    <td className="border-b border-gray-800 px-6 py-1 whitespace-nowrap text-center text-white text-mm">
                                        <div className="flex justify-center space-x-2 ml-2">
                                            <div><button>a</button></div><button>b</button><div><button>c</button></div><div></div>
                                        </div>
                                    </td>
                                        
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
            <CreateFooter />
        </div>
    )
}