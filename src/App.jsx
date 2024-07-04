import React, { useContext } from 'react';
import './index.css';
import DarkModeToggle from './DarkModeToggle';
import ThemeContext from './ThemeContext';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <header>
        <h1>About Us</h1>
        <DarkModeToggle />
      </header>
      <main>
        <section className="about">
          <h2>Who We Are</h2>
          <p>
            We are a dynamic agency providing top-notch services in web development, digital marketing, and more.
          </p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals dedicated to delivering the best results for our clients.
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us via email or phone for any inquiries.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
