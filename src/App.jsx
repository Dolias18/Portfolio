import "./App.css";

import Navbar from "./components/Navbar";
import HomePerson from "./components/HomePerson";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";

function App() {

  return (
    <div className="container">
      <Navbar />

      <main className="container-main">
        <HomePerson/>
        <AboutMe/>
        <Experience/>
      </main>
    </div>
  );
}

export default App;