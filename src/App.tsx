import "./App.css";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { MobilePreview } from "./components/MobilePreview";

function App() {
  return (
    <div className="bg-primary d-flex content-start justify-center min-h-screen p-4">
      <Hero />
      <Projects />
      <MobilePreview/>
    </div>
  );
}

export default App;
