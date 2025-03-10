import { Route, Routes } from "react-router-dom";
import Task1 from "./components/pages/task1";
import Task2 from "./components/pages/task2";
function App() {
  return (
    <>
      <Routes>
      <Route path="/task1" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
      </Routes>
    </>
  )
}

export default App
