import axios from 'axios'
import { FormEvent, useEffect, useState } from 'react';
import { API_URL } from '../../../config';

import { CreateHeader } from '../../shared/componentes/header/CreateHeader';
import { CreateFooter } from '../../shared/componentes/footer/CreateFooter';

export function CreateClashes() {
    function handleCreateClushes(event: FormEvent) {
        event.preventDefault();
    
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
    
        console.log(data)
    
        try {
            axios.post(`${API_URL}/createClashes`, {data})
        
            alert("Confrontros cadastrados com sucesso!")
        } catch(error) {
            alert("Erro ao criar confrontos!")
        }
    }
    
    return (
        <div className="h-screen flex flex-col">
         
            <CreateHeader />
            
            <div className="flex-1 flex col justify-center">
                <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-lg h-auto p-2 flex-1 bg-gray-600 rounded-lg">
                    <form className="p-2 h-full" onSubmit={handleCreateClushes}>
                        <div className="flex justify-center mt-5">
                            <label className="text-white text-xm text-center font-bold ">
                            Confrontos 
                            </label>
                        </div>
                        
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club1" name="club1" required
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club2" name="club2" required
                            />
                        </div>
                
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club3" name="club3" required
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club4" name="club4" required
                            />
                        </div>
                
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club5" name="club5" required
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club6" name="club6" required
                            />
                        </div>
                
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club7" name="club7" required
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club8" name="club8" required
                            />
                        </div>
                
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club9" name="club9" required
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club10" name="club10" required 
                            />
                        </div>
                
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club11" name="club11" required 
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club12" name="club12" required 
                            />
                        </div>
                
                        <div className="flex space-x-5 mt-3 justify-center">
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club13" name="club13" required 
                            />
                            <label className="text-white text-sm">
                            x
                            </label>
                            <input type="text" className="bg-transparent border uppercase  
                            rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
                            text-white font-semibold" id="club14" name="club14" required 
                            />
                        </div>
                
                        <div className="flex justify-center mt-10 mb-8">
                            <button 
                                type="submit" 
                                className="py-2 px-2 rounded-sm bg-teal-500 hover:bg-teal-700 
                                p-1 text-dm mt-10 text-white text-bold"
                            >
                                Cadastrar Confrontos
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          
            <CreateFooter />  
    
        </div>
    )
}

