import "./App.css";
import { Card } from "./components/Card";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="bg-primary d-flex content-start justify-center min-h-screen p-4">
      <Card />
      <Projects />
    </div>
  );
}

export default App;
