import { useState } from 'react'
import Home from './Components/Home';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import Display from './Components/Display';
import Word from './Components/Word';
import Background from './Components/Background';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route  path="/home" element={<Home />}></Route>
            <Route path='/display/:number' element={<Display/>}></Route>
            <Route path='/:word' element={<Word/>}></Route>
            <Route path="/:word/:color/:back" element={<Background />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
