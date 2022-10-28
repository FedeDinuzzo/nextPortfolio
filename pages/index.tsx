import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experiences';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Fede's Porfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
      <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-center'>
        <Skills />
      </section>

      <section id="projects" className='snap-center'>
        <Projects />
      </section>

      <section id="contactMe" className='snap-end'>
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;