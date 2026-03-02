import "./App.css";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-primary d-flex content-start justify-center min-h-screen p-4">
      <Hero />
      <Projects />
      <Footer className="mt-auto fixed bottom-0 left-0 w-full"/>
    </div>
  );
}

export default App;
