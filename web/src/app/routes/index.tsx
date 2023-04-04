import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { CreateClashes } from "../pages/clashes/CreateClashes";
import { CreateGuesses } from "../pages/guesses/CreateGuesses";
import { GuessesProvider } from "../context/GuessesContext";
import { ValidateGuesses } from "../pages/guesses/ValidateGuesses";

export function CreateRoutes() {
    return (
      <BrowserRouter>
        <Routes>   
          <Route element={<Home />} path="/" />
          <Route element={<CreateClashes />} path="/createClashes" />
          <Route element={<CreateGuessesParent />} path="/createGuesses" />
          <Route element={<ValidateGuesses />} path="/validateGuesses"/>
        </Routes>
      </BrowserRouter>  
    )
}

const CreateGuessesParent = () => {
  return(
    <GuessesProvider>
      <CreateGuesses />
    </GuessesProvider>
  )
}
