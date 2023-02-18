import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import { TodoContextProvider } from "./Contexts/TodoContext/TodoContext";

function App() {
  return (
    <div className="wrapper">
      <TodoContextProvider>
        <Navbar></Navbar>
        <div className="card">
          <Card></Card>
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
