import "./App.css";
import Card from "./Components/Card";
import { TodoContextProvider } from "./Contexts/TodoContext/TodoContext";

function App() {
  return (
    <div className="wrapper">
      <TodoContextProvider>
        <div className="card">
          <Card></Card>
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
