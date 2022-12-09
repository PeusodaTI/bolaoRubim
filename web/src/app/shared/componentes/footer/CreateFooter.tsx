import zap from '../../../../assets/zap.png';
import tel from '../../../../assets/tel.png';
import insta from '../../../../assets/insta.png';
import cpR from '../../../../assets/cpR.png';

export function CreateFooter() {
    return(
        <div className="w-auto h-auto p-2">
            <div className="flex justify-center space-x-20 mt-4 ">
                <img src={tel} alt="" className="w-6 h-6 "></img>
                <img src={zap} alt="" className="w-6 h-6 "></img>
                <img src={insta} alt="" className="w-6 h-6 "></img>
            </div>
            <div className="flex justify-center items-center space-x-2 mt-4">
                <img src={cpR} alt="" className="w-3 h-3"></img>
                <span className="ml-1 text-white text-mm">2022 PHDevelopment</span>      
            </div>
        </div>
    )
}