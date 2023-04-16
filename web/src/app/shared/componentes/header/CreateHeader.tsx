import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png';


export function CreateHeader() {
    const [navbar, setNavbar] = useState(false);

    return(
        <div className="w-auto h-auto  pb-0">
            
            <nav className="w-full bg-teal-700 fixed z-50 py-2 px-2">
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
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <Link to="/createClashes">Cadastrar Confronto</Link>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <Link to="/createGuesses">Cadastrar Palpite</Link>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <Link to="/validateGuesses">Validar Palpite</Link>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <a href="#">Resultados</a>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <a href="#">Listagem Palpites</a>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <a href="#">Ganhador</a>
                                </li>
                                <li className="text-white hover:text-white 
                                    no-underline hover:underline underline-offset-8 
                                    decoration-gray-700 decoration-4 text-dm"
                                >
                                    <a href="#">Regras</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex flex-col items-center mt-20 sm:mt-20 md:mt-20 lg:mt-20">
                <img src={logo} alt="" className="h-40 w-40 left-10"></img>
            </div>
        </div>
    
    )
        
    
}