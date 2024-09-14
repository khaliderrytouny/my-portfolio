import { About } from "./Componants/About";
import Contact from "./Componants/Contact";
import Hero from "./Componants/Hero";
import Navbar from "./Componants/Navbar";
import Projects from "./Componants/Projects";
import Technologies from "./Componants/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-reven-300 selection:text-reven-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto p-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
