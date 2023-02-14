import axios from 'axios'
import { FormEvent } from 'react';

import { CreateHeader } from '../../shared/componentes/header/CreateHeader';
import { CreateFooter } from '../../shared/componentes/footer/CreateFooter';

export function CreateClashes() {
    function handleCreateClushes(event: FormEvent) {
        event.preventDefault();
    
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
    
        console.log(data)
    
        try {
            axios.post('http://localhost:3333/createClashes', {
                data: {
                    club1: data.club1,
                    club2: data.club2,
                    club3: data.club3,
                    club4: data.club4,
                    club5: data.club5,
                    club6: data.club6,
                    club7: data.club7,
                    club8: data.club8,
                    club9: data.club9,
                    club10: data.club10,
                    club11: data.club11,
                    club12: data.club12,
                    club13: data.club13,
                    club14: data.club14,
                }
            })
        
            alert("Confrontros cadastrados com sucesso!")
        } catch(error) {
            alert("Erro ao criar confrontos!")
        }
    }
    
    return (
        <div className="h-screen flex flex-col">
         
            <CreateHeader />
    
            <div className="w-auto h-auto p-2 flex-1 ">
                <form className="p-2 h-full" onSubmit={handleCreateClushes}>
                    <div className="flex justify-center mt-5">
                        <label className="text-white text-md text-center font-bold ">
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
                            className="rounded-sm bg-cyan-100 hover:bg-cyan-300 
                            p-1 text-mm font-semibold mt-10"
                        >
                            Cadastrar Confrontos
                        </button>
                    </div>
                </form>
            </div>
          
            <CreateFooter />  
    
        </div>
    )
}

