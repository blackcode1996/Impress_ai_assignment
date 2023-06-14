import "./App.css";
import { createRoot } from "react-dom";
import AllRoutes from "./Pages/AllRoutes/AllRoutes";

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;

