import { AboutMe } from "@/components/AboutMe";
import Contact from "@/components/Contact";
import { Education } from "@/components/Education";
import Heropage from "@/components/Heropage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <Heropage />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </main>
    </div>
  );
}
