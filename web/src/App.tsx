import './styles/main.css';
import axios from 'axios'

import { CreateHeader } from './componentes/header/CreateHeader';
import { CreateFooter } from './componentes/footer/CreateFooter';

function App() {
   
  const res = axios.get(
		`https://api.api-futebol.com.br/v1/ao-vivo`,
		{
			headers: {
				'Authorization': 'Bearer test_2dc8284ec83ec4e843a7a71f25a292',
			}
		}
	)
  console.log(res);

  return (
    <div className="h-screen flex flex-col">
     
      <CreateHeader />

      <div className="w-auto h-auto p-2 flex-1 ">
        <form className="p-2 h-full">
          <div className="flex justify-center mt-5">
            <label className="text-white text-md text-center font-bold ">Confrontos </label>
          </div>
          
          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex space-x-5 mt-3 justify-center">
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
            <label className="text-white text-sm">
              x
            </label>
            <input type="text" className="bg-transparent border 
              rounded-md h-5 w-28 md:w-44 sm:w-44 text-center text-mm 
              text-white font-semibold" 
            />
          </div>

          <div className="flex justify-center mt-10 mb-8">
            <button className="rounded bg-indigo-200 p-1 text-mm mt-10">Cadastrar Confrontos</button>
          </div>
        </form>
      </div>
      
      <CreateFooter />  

    </div>
  )
}

export default App


