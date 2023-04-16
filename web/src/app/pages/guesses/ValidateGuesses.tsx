import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { CreateFooter } from "../../shared/componentes/footer/CreateFooter"
import { CreateHeader } from "../../shared/componentes/header/CreateHeader"
import { API_URL } from "../../../config"
import search from "../../../assets/pesquisa.png"
import save from "../../../assets/v.png"
import destroy from "../../../assets/x.png"

interface Guesses {
    id: string,
    resultClubA: number,
    resultClubB: number,
    date: string,
    Clashes: {
      id: string,
      clubA: string,
      clubB: string,
      date: string,
    }
}

interface Players {
    id: string,
    name: string,
    phoneNumber: string,
    date: string,
    validation: boolean,
}

export const ValidateGuesses = () => {
    const [guess, setGuess] = useState<Guesses[]>([])
    const [players, setPlayers] = useState<Players[]>([])
    const [showModal, setShowModal] = useState<boolean>(false)

    useEffect(() => {
        axios.get(`${API_URL}/getPlayers`)
            .then(response => {
                setPlayers(response.data)
            })
            .catch(error => {
                alert(error)
            })      
    }, [])
    //console.log(players)



    const handleTrueShowModal = (id: string) => {
        setShowModal(true)
        
        axios.get(`${API_URL}/getGuess/${id}`)
        .then(response => {
            setGuess(response.data)
        })
        .catch(error => {
            alert(error)
        })    
   
        console.log(guess)
        
    }

    const handleFalseShowModal = () => {
        setShowModal(false)
    }

    return(
        <div className="h-screen flex flex-col">
            <CreateHeader />

                <Fragment>
                    <div className="flex-1 relative overflow-x-auto mt-2 mb-4 sm:ml-10 sm:mr-10 md:ml-10 md:mr-10 lg:ml-16 lg:mr-16 mr-5 ml-5 rounded-lg">
                        <table className="w-full  bg-gray-600">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-white font-bold text-dm">Jogador</th>
                                    <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-white font-bold text-dm ">Telefone</th>
                                    <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-white font-bold text-dm whitespace-nowrap ">Data palpite</th>
                                    <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-white font-bold text-dm ">Validação</th>
                                    <th scope="col" className="border-b-4 border-slate-200 rounded-sm border-t-4 px-6 py-3 text-white font-bold text-dm ">Ações</th>
                                </tr>
                            </thead>
                            <tbody >
                                {players.map(player => {   
                                    return(
                                        
                                        <tr className="hover:bg-neutral-400 " key={player.id}>
                                            <td 
                                                scope="row" 
                                                className="border-b border-gray-800
                                                    px-6 py-1 
                                                    whitespace-nowrap 
                                                    text-center 
                                                    text-white 
                                                    text-mm"
                                            >
                                                {player.name}
                                            </td>
                                            <td 
                                                className="border-b border-gray-800 
                                                    px-6 py-1 
                                                    whitespace-nowrap 
                                                    text-center 
                                                    text-white 
                                                    text-mm"
                                            >
                                                {player.phoneNumber}
                                            </td>
                                            <td 
                                                className="border-b  border-gray-800
                                                    px-6 
                                                    py-1 
                                                    whitespace-nowrap 
                                                    text-center 
                                                    text-white text-mm"
                                            >
                                                {player.date}
                                            </td>
                                            <td 
                                                className="border-b  border-gray-800
                                                    px-6 
                                                    py-1 
                                                    whitespace-nowrap 
                                                    text-center 
                                                    text-white text-mm"
                                            >
                                                {player.validation ? "Sim" : "Não"}
                                            </td>
                                            <td className="border-b border-gray-800 px-6 py-1 whitespace-nowrap text-center text-white text-mm">
                                                <div className="flex justify-center space-x-3 ml-2">
                                                    <div>
                                                        <button 
                                                            onClick={() => handleTrueShowModal(player.id)}
                                                            className="h-5 w-5">
                                                                <img src={search}></img>
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button className="h-5 w-5"><img src={destroy}></img></button></div>
                                                </div>
                                            </td>
                                                
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>

                    {showModal && (
                        guess.map(guesses => {
                            console.log(guesses)
                            return(
                                
                                <div className="fixed inset-0 bg-gray-600 bg-opacity-25 backdrop-blur-sm flex justify-center items-center rounded-lg"
                                    key={guesses.id}
                                >
                                    <div className="bg-gray-600 text-center rounded-lg">
                                    <div className="flex justify-center mb-2">           
                                    <div className="w-1/3 h-auto text-center sm:text-right">
                                        
                                        <label 
                                            className="text-white text-mm uppercase"
                                        >
                                            {guesses.Clashes.clubA}
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
//                                            onChange={e => setResultClubA(parseInt(e.target.value))}
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
                                         //   onChange={e => setResultClubB(parseInt(e.target.value))}
                                         //   onBlur={() => handleGuesses(props.id)}
                                        />
                                    </div>
                                    
                                    <div className="w-1/3 h-auto text-center sm:text-left">
                                        <label 
                                            className="text-white text-mm uppercase"
                                        >
                                            {guesses.Clashes.clubB}
                                        </label>
                                    </div>
                                </div>
                                    <div><button onClick={handleFalseShowModal}>Cancel</button></div>
                                    </div>
                                
                                </div>
                        )})
                    )}
                </Fragment>
            
            <CreateFooter />
        </div>
    )
}