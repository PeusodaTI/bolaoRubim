import { Fragment, useState } from "react"
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
            Bem-vindo a BetBim, 
            plataforma para cadastro e acompanhamento dos palpites semanais dos 
            nossos bolões.<br/>
            Faça parte do nosso time e concorra ao prêmio de cada rodada.
            </span>
            <button 
              className="w-20 h-8 rounded-sm bg-teal-500 hover:bg-teal-700 
              p-1 text-dm mt-10 text-white text-bold"
            >
              Entrar
            </button>           
          </div>
          <CreateFooter />

        </div>
    );
}
/*

.modal-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  z-index: 10000;
  padding: 20px;
}
Você pode adicionar essas classes ao seu código e envolver o seu modal com elas:



*/