import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
function App() {
 
  return (
  <div>
    {/* <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route index path = "*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter> */}
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App
