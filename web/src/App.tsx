import './styles/main.css';

import logo from '../public/logoT.png';
import zap from '../public/zap.png';
import tel from '../public/tel.png';
import insta from '../public/insta.png';
import cpR from '../public/cpR.png';

function App() {

  return (
    <div className="h-screen flex flex-col">
     
      <div className="w-auto h-auto p-4">
        <div className="flex flex-col items-center">
          <img src={logo} alt="" className="h-14 w-14 left-10"></img>
          <h1 className="text-lg font-bold mt-1 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800">
            Bolão Esportivo Rubim
          </h1>
        </div>
      </div>

      
      
      <div className="w-auto h-auto p-2 flex-1 ">
        <form className="p-2 ">
          <div className="flex flex-col items-center mb-5">
            <label className="text-white text-left text-dm mb-1">Nome</label>
            <input type="text" className="bg-transparent border border-white rounded text-sm text-black text-center"/>
            <label className="text-white text-left text-dm mt-2 mb-1">Telefone</label>
            <input type="text" className="bg-transparent border-white border rounded text-sm text-black text-center"/>
          </div>

          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>

          <div className="flex justify-center mb-2">
            <div className="w-1/3 h-auto text-center sm:text-right">
              <label className="text-white text-dm">Cruzeiro</label>
            </div>
            <div className="flex-grow   space-x-1 sm:space-x-5 h-auto text-center">
            <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
              <label className="text-white text-sm">X</label>
              <input type="number" className="sm:text-right text-sm text-center backdrop-blur-sm w-8 rounded bg-transparent border border-white text-black"/>
            </div>
            <div className="w-1/3 h-auto text-center sm:text-left">
              <div className="">
              <label className="text-white text-dm">Manchester City</label>
            </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 mb-3">
            <button className="rounded bg-indigo-200 p-1 text-mm mt-6">Cadastrar Palpite</button>
          </div>
        </form>
      </div>
      
      <div className="w-auto h-auto p-2">
        <div className="flex justify-center space-x-20 mt-4 ">
          <img src={tel} alt="" className="w-6 h-6 "></img>
          <img src={zap} alt="" className="w-6 h-6 "></img>
          <img src={insta} alt="" className="w-6 h-6 "></img>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-4">
          <img src={cpR} alt="" className="w-3 h-3"></img>
          <span className="text-white text-mm">Copyright 2022 PHDevelopment</span>      
        </div>
      </div>

    </div>
  )
}

export default App
