import { Route, Routes } from "react-router-dom";
// import { SashaPolina } from "./SashaPolina";
// import { SergeyValeria } from "./SergeyValeria";
import { SergeyValeria } from "./SergeyValeria"
import { SergeyAngelina } from "./SergeyAngelina"




export function App() {
    return (
        <div>
            <SergeyValeria/> 
            {/* <Routes >
            <Route path="/" element={<h1>Главная</h1>}/> 
            <Route path="/sergey-valeria" element={<SergeyValeria/>}/> 
            <Route path="/sergey-angelina" element={<SergeyAngelina/>}/> 
           </Routes>
           {/* <SergeyAngelina/> */}
        </div>
    )
}