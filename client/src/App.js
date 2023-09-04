import './App.css';
import Pannel from './Comp/Pannel';
import Voting from './Comp/Voting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Voting/>}/>
        <Route path='/adminsbj' element={<Pannel/>}/>
      </Routes>
      {/* <Pannel /> */}
      </BrowserRouter>
    </>
  )
}

export default App;
