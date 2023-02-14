interface SetGuessesProps {
    clubA: string;
    clubB: string;
}

export function SetGuesses(props: SetGuessesProps) {
    return (
        <div className="flex justify-center mb-2">
                            
            <div className="w-1/3 h-auto text-center sm:text-right">
                
                <label 
                    className="text-white text-dm uppercase"
                >
                    {props.clubA}
                </label>
            </div>

            <div className="flex-grow space-x-1 sm:space-x-5 h-auto text-center">
                <input 
                    type="number" 
                    className="sm:text-right text-sm text-center 
                        backdrop-blur-sm w-8 rounded bg-transparent 
                        border border-white text-white"
                    />
                <label 
                    className="text-white text-sm"
                >
                    X
                </label>
                <input 
                    type="number" 
                    className="sm:text-right text-sm text-center 
                        backdrop-blur-sm w-8 rounded bg-transparent 
                        border border-white text-white"
                />
            </div>
            
            <div className="w-1/3 h-auto text-center sm:text-left">
                <label 
                    className="text-white text-dm uppercase"
                >
                    {props.clubB}
                </label>
            </div>
        </div>
    )
}