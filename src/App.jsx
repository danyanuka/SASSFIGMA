import { NavBar } from "./Comps/NavBar";
import { HomePage } from "./Views/HomePage";
import { Footer } from "./Comps/Footer";
import { Contact } from "./Comps/Contact";

function App() {
  return (
    <div className="main-layout">
      <NavBar />
      <HomePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
