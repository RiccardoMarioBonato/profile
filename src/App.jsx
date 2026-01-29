import React, { useState } from 'react';
import './App.css';

function App() {
  const [expandedSections, setExpandedSections] = useState({
    about: true,
    experience: true,
    education: true,
    projects: true,
    skills: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="name">Riccardo M. Bonato</h1>
          <p className="title">Software Engineer</p>
          <div className="contact">
            <span>Rickst0702@Gmail.com</span>
            <span>(66+) 96-771-5888</span>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </header>

      <main className="main">
        {/* About Section */}
        <Section 
          id="about"
          title="About"
          isExpanded={expandedSections.about}
          onToggle={() => toggleSection('about')}
        >
          <p>
            Software Engineer with experience in full-stack web development, game development, and AI/ML projects. 
            Multilingual (Thai Native, English Master, Italian Native). Currently studying B.E. in Software and 
            Knowledge Engineering at Kasetsart University while working as IT/Tech Support and Translator at Guru Electronics. 
            Skilled in Python, JavaScript, C#, and various frameworks including Django, Next.js, and Unity.
          </p>
        </Section>

        {/* Experience Section */}
        <Section 
          id="experience"
          title="Experience"
          isExpanded={expandedSections.experience}
          onToggle={() => toggleSection('experience')}
        >
          <div className="item">
            <div className="item-header">
              <h3 className="item-title">IT/Tech Support & Translator</h3>
              <span className="date">June 2023 - Present</span>
            </div>
            <p className="company">Guru Electronics</p>
            <p className="description">
              Multilingual translator (Thai, English, Italian). Provided software & hardware support to clients. 
              Handled customer sales support and initial web development setup for clients. Managed product delivery 
              across the country and performed media editing using Vegas Pro, Photoshop, and Blender. Intermediate 
              experience with Epoxy Resin work.
            </p>
          </div>
        </Section>

        {/* Education Section */}
        <Section 
          id="education"
          title="Education"
          isExpanded={expandedSections.education}
          onToggle={() => toggleSection('education')}
        >
          <div className="item">
            <div className="item-header">
              <h3 className="item-title">Bachelor's Degree - B.E. in Software and Knowledge Engineering</h3>
              <span className="date">June 2023 - October 2027</span>
            </div>
            <p className="company">Kasetsart University</p>
          </div>

          <div className="item">
            <div className="item-header">
              <h3 className="item-title">High School Diploma - English & Mathematics</h3>
              <span className="date">May 2017 - March 2023</span>
            </div>
            <p className="company">Satriwitthaya 2 School</p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section 
          id="projects"
          title="Projects"
          isExpanded={expandedSections.projects}
          onToggle={() => toggleSection('projects')}
        >
          <div className="item">
            <h3 className="item-title">SleepEfficiencyPrediction</h3>
            <p className="company">Django Web App</p>
            <p className="description">
              Full-stack web application and API that predicts sleep efficiency and provides access to users' sleep information. 
              Combines sensor data (temperature, humidity, heartbeat) for comprehensive analysis.
            </p>
          </div>

          <div className="item">
            <h3 className="item-title">UniPlus</h3>
            <p className="company">Django & Next.js Web App</p>
            <p className="description">
              Comprehensive university event management platform enabling event discovery and registration. 
              Provides organizers with tools to create events, manage registrations, and track attendance through QR code scanning.
            </p>
          </div>

          <div className="item">
            <h3 className="item-title">Tactical-Hero-Battle-Game</h3>
            <p className="company">Python</p>
            <p className="description">
              2D side-scrolling tactical strategy game combining tower defense mechanics inspired by Line Ranger and Battle Cats. 
              Built with OOP principles.
            </p>
          </div>

          <div className="item">
            <h3 className="item-title">Maze Escape</h3>
            <p className="company">Unreal Engine 4 (C++, Blueprints)</p>
            <p className="description">
              3D horror maze puzzle built with UE4 as a functional demo.
            </p>
          </div>

          <div className="item">
            <h3 className="item-title">Chimera</h3>
            <p className="company">Unity (C#)</p>
            <p className="description">
              2D side-scrolling game that combines different mob DNA to evolve the player character. Current side project.
            </p>
          </div>

          <div className="item">
            <h3 className="item-title">E-Commerce Stores</h3>
            <p className="company">Shopify Web Apps</p>
            <p className="description">
              Built multiple fully functional e-commerce stores: Cotour Jerdan (luxury furniture) and Chess Haven (custom chess sets). 
              Implemented custom product catalogs, payment processing, and inventory management systems.
            </p>
          </div>

          <div className="item">
            <h3 className="item-title">Fruits Anomaly Detector</h3>
            <p className="company">AI/ML (Cira-core)</p>
            <p className="description">
              AI deep learning model trained to detect bruises and anomalies on conveyor belt fruits for separation. 
              Designed for farms and factories to maximize separation speed without manual labor.
            </p>
          </div>
        </Section>

        {/* Skills Section */}
        <Section 
          id="skills"
          title="Skills"
          isExpanded={expandedSections.skills}
          onToggle={() => toggleSection('skills')}
        >
          <div className="skills-grid">
            <span className="skill">JavaScript/TypeScript</span>
            <span className="skill">Python</span>
            <span className="skill">C#/C++</span>
            <span className="skill">Go</span>
            <span className="skill">Kotlin</span>
            <span className="skill">Django</span>
            <span className="skill">Next.js</span>
            <span className="skill">React</span>
            <span className="skill">Unity</span>
            <span className="skill">Unreal Engine</span>
            <span className="skill">Docker</span>
            <span className="skill">Git</span>
            <span className="skill">MySQL/PostgreSQL</span>
            <span className="skill">REST APIs</span>
            <span className="skill">Blender</span>
            <span className="skill">Photoshop</span>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Riccardo M. Bonato. All rights reserved.</p>
      </footer>
    </div>
  );
}

function Section({ id, title, isExpanded, onToggle, children }) {
  return (
    <section className="section" id={id}>
      <button className="section-header" onClick={onToggle}>
        <h2 className="section-title">{title}</h2>
        <span className="toggle-icon">{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && <div className="section-content">{children}</div>}
    </section>
  );
}

export default App;