// App.tsx — Root application shell

import { Cursor }       from './components/Cursor/Cursor';
import { Nav }          from './components/Nav/Nav';
import { Hero }         from './components/Hero/Hero';
import { Stats }        from './components/Stats/Stats';
import { About }        from './components/About/About';
import { Projects }     from './components/Projects/Projects';
import { Experience }   from './components/Experience/Experience';
import { Skills }       from './components/Skills/Skills';
import { Achievements } from './components/Achievements/Achievements';
import { Education }    from './components/Education/Education';
import { Contact }      from './components/Contact/Contact';
import { Footer }       from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <a href="#root-content" className="skip-link">
        Skip to content
      </a>

      <Cursor />
      <Nav />

      <main id="root-content">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
