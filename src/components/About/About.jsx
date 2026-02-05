import React from 'react';
import Layout from '../shared/layout';
import './About.css';
 
const About = () => (
  <Layout>
    <div className="about-container">
      <h1 className="about-title">About Language Explorer</h1>
      <p className="about-description">
        This application is a language learning platform inspired by Duolingo.<br />
        Explore lessons, practice vocabulary, and track your progress in a fun and interactive way!
      </p>
      <ul className="about-list">
        <li>🌍 Multiple languages supported</li>
        <li>📝 Interactive lessons and quizzes</li>
        <li>🎧 Audio pronunciation for vocabulary</li>
      </ul>
      <p className="about-footer">
        Made with ❤️ for learning purposes.
      </p>
    </div>
  </Layout>
);

export default About;
