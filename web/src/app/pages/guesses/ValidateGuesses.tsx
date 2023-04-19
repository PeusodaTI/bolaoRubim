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
    Player: {
        id: string,
        name: string,
        phoneNumber: string,
        date: string,
        validation: boolean,
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
    const [playerName, setPlayerName] = useState<string>("")
    const [playerPhoneNumber, setPlayerPhoneNumber] = useState<string>("")

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



    const handleTrueShowModal = (id: string, name: string, phoneNumber: string) => {
        setShowModal(true)
        setPlayerName(name)
        setPlayerPhoneNumber(phoneNumber)

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
                                <th scope="col" className="border-b-2 border-slate-200 rounded-sm border-t-2 px-6 py-3 text-white font-bold text-dm">Jogador</th>
                                <th scope="col" className="border-b-2 border-slate-200 rounded-sm border-t-2 px-6 py-3 text-white font-bold text-dm ">Telefone</th>
                                <th scope="col" className="border-b-2 border-slate-200 rounded-sm border-t-2 px-6 py-3 text-white font-bold text-dm whitespace-nowrap ">Data palpite</th>
                                <th scope="col" className="border-b-2 border-slate-200 rounded-sm border-t-2 px-6 py-3 text-white font-bold text-dm ">Validação</th>
                                <th scope="col" className="border-b-2 border-slate-200 rounded-sm border-t-2 px-6 py-3 text-white font-bold text-dm ">Ações</th>
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
                                                        onClick={() => handleTrueShowModal(player.id, player.name, player.phoneNumber)}
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
                <div className="flex flex-1 items-center">
                    <div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm flex justify-center items-center rounded-lg ">
                        <div className="bg-gray-800 rounded-lg flex flex-col w-80 sm:w-32 md:w-72 lg:w-72 xl:w-96 ">
                            <div className="flex flex-col mt-4 mb-2 items-center space-x-2">
                                <h1 className="text-white font-bold">Dados do Palpite</h1>
                                <input 
                                    type="text" 
                                    className="bg-transparent border 
                                        border-white rounded text-dm text-white text-center p-0 mt-4 w-52 items-center"
                                    name="name"
                                    id="name"
                                    required
                                    defaultValue={playerName}
                                />
                                <input 
                                    type="text" 
                                    className="bg-transparent border-white border 
                                    rounded text-sm text-white text-center p-0 mt-2 w-52"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    required
                                    defaultValue={playerPhoneNumber}
                                />
                            </div>
                                    
                                    {/* Map com return JSX */}
                                    {guess.map(guesses => {
                                    return (
                                        <div className="flex mt-2">
                                            <div className="  justify-center w-1/3 h-auto text-right">
                                                <label className="text-white text-mm text-right uppercase ">
                                                    {guesses.Clashes.clubA}
                                                </label>
                                            </div>

                                            <div className=" flex flex-grow space-x-2 justify-center">
                                            <input 
                                                    type="number" 
                                                    className="sm:text-right text-sm text-center 
                                                        backdrop-blur-sm w-8 rounded bg-transparent 
                                                        border border-white text-white"
                                                    id="clubA"
                                                    name="clubA"
                                                    defaultValue={guesses.resultClubA}
                                                    required
                                                />
                                            
                                                <label className="text-white text-mm text-center">X</label>
                                            
                                                <input 
                                                    type="number" 
                                                    className="sm:text-right text-sm text-center 
                                                        backdrop-blur-sm w-8 rounded bg-transparent 
                                                        border border-white text-white"
                                                    id="clubA"
                                                    name="clubA"
                                                    defaultValue={guesses.resultClubB}
                                                    required
                                                />
                                            </div>

                                            <div className=" w-1/3 h-auto text-left">
                                                <label className="text-white text-mm text-right uppercase ">
                                                    {guesses.Clashes.clubB}
                                                </label>
                                            </div>
                                        </div>
                                    )})}

                                    <div className="flex justify-center space-x-5 mt-10 mb-5">
                                        <button 
                                            className="w-20 rounded-sm bg-teal-500 hover:bg-teal-700 px-1 py-1 text-mm text-white font-bold"
                                            onClick={handleFalseShowModal}>
                                                Confirmar
                                        </button>
                                        <button 
                                            className="w-20 rounded-sm bg-red-500 hover:bg-red-700 px-1 py-1 text-mm text-white font-bold"
                                            onClick={handleFalseShowModal}>
                                                Voltar
                                        </button>
                                    </div>
                                
                        </div>
                    </div>
                </div>
                )}
            </Fragment>
            
            <CreateFooter />
        </div>
    )
}