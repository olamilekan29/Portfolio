import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Soft from "./Components/Soft"
const App = () => {
  return(
    <>
    <Header/>
    <section id="Home">
      <Home/>
    </section>
      
      <section id="About">
        <About/>
      </section>
      <section id="Skills">
        <Skills/>
      </section>
      <Soft/>
      <section id="Projects">
         <Projects/>
      </section>
      <section id="Contact">
        <Contact/>
      </section>
     
      
      
     
      
    </>
  );

}
export default App;