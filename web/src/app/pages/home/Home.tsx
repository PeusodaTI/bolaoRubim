/*import '../../../styles/main.css';
import axios from 'axios'
import { FormEvent } from 'react';

import { CreateHeader } from '../../shared/componentes/header/CreateHeader';
import { CreateFooter } from '../../shared/componentes/footer/CreateFooter';

function App() {

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
            <button type="submit" className="rounded bg-indigo-200 p-1 text-mm mt-10">
              Cadastrar Confrontos
            </button>
          </div>
        </form>
      </div>
      
      <CreateFooter />  

    </div>
  )
}

export default App


*/

import { CreateFooter } from "../../shared/componentes/footer/CreateFooter";
import { CreateHeader } from "../../shared/componentes/header/CreateHeader";


export function Home() {
    return(
        <div className="h-screen flex flex-col">
     
          <CreateHeader />

          <div className="flex flex-col flex-1 w-auto h-auto p-2 items-center">
            
              <span 
                className="ml-10 mr-10 mt-10 mb-10 text-[16px]
                 text-white justify-center text-justify"
                >
                  Bem-vindo ao Bolão Esportivo do Rubim, 
                plataforma para cadastro e acompanhamento dos palpites semanais dos 
                nossos bolões.<br/>
                Faça parte do nosso time e concorra ao prêmio de cada rodada.
              </span>
              <button className="w-20 h-8 rounded-sm bg-cyan-100 hover:bg-cyan-300 text-[16px] text-black font-bold">Entrar</button>
  
          </div>
          
          <CreateFooter />

        </div>
    );
}