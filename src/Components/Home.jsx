import React, { useState, useEffect } from 'react';
import About from "./About"
import Timeline from './Timeline';
import Skills from './Skills';
import Projects from './Projects';
import Service from './Service';
import Testimonials from './Testimonials';
import NavSection from './NavSection';
import ThemeSet from './Others component/ThemeSet';
import Contact from './Contact';
import Cursor from './Others component/Cursor';

function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1100)
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className='Load-page'>
        <div className='load-page-circle'>
          <div
            className="circularDiv"
          />
        </div>
      </section>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='main_section'>
      <ThemeSet />
      <Cursor />
      <NavSection user={data.user} />
      <div className='container'>
        <About user={data.user} />
        <Service user={data.user} />
        <Skills user={data.user} />
        <Projects user={data.user} />
        <Timeline user={data.user} />
        <Testimonials user={data.user} />
        <Contact user={data.user} />
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default Home;
