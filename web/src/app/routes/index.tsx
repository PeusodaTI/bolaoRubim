import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateClashes } from "../pages/clashes/CreateClashes";
import { CreateGuesses } from "../pages/guesses/CreateGuesses";
import { Home } from "../pages/home/Home";

export function CreateRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<CreateClashes />} path="/createClashes" />
            <Route element={<CreateGuesses />} path="/createGuesses" />
          </Routes>
        </BrowserRouter>
    )
}
