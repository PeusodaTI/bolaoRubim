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
              <button className="w-20 h-8 rounded-sm bg-cyan-100 hover:bg-cyan-300 text-[16px] text-black font-bold">Entrar</button>
  
          </div>
          
          <CreateFooter />

        </div>
    );
}