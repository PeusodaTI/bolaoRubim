import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logoT.png';


export function CreateHeader() {
    const [navbar, setNavbar] = useState(false);

    return(
        <div className="w-auto h-auto p-4">
            
            <nav className="w-full bg-transparent">
                <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                           
                            <div className="md:hidden justify-end">
                                <button
                                    className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            viewBox="0 0 15 15"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-2 md:flex md:pb-0 md:mt-0 ${
                                navbar ? "block" : "hidden"
                            }`}
                        >
                            <ul className="items-center justify-center space-y-2 md:flex md:space-x-10 md:space-y-0">
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <Link to="/createClashes">Cadastrar Confronto</Link>
                                </li>
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <Link to="/createGuesses">Cadastrar Palpite</Link>
                                </li>
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <a href="#">Validar Palpite</a>
                                </li>
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <a href="#">Ganhador</a>
                                </li>
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <a href="#">Regras</a>
                                </li>
                                <li className="text-zinc-700 hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-slate-600 decoration-4 text-sm"
                                >
                                    <a href="#">Resultados</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-col items-center mt-3">
                <img src={logo} alt="" className="h-20 w-20 left-10"></img>
                <h1 className="font-bold mt-1 bg-clip-text text-transparent 
                    bg-white text-lg"
                >
                    Bolão Esportivo Rubim
                </h1>
            </div>
        </div>
    
    )
        
    
}