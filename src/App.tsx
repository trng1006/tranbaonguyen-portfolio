import './App.css'
import { Code2, Globe, Database, Cpu, Calendar } from 'lucide-react'

function App() {
  return (
    <div className="container">
      <header>
        <div className="badge">Software Engineer</div>
        <h1>Trần Bảo Nguyên</h1>
        <p className="hero-sub">
          A passionate developer born on October 6, 2005. I specialize in building robust applications across web, mobile, and desktop platforms.
        </p>
      </header>

      <section>
        <h2><Calendar size={20} /> Personal Info</h2>
        <div className="grid">
          <div className="card">
            <h3>Date of Birth</h3>
            <p>10 / 06 / 2005</p>
          </div>
          <div className="card">
            <h3>Location</h3>
            <p>Vietnam</p>
          </div>
        </div>
      </section>

      <section>
        <h2><Code2 size={20} /> Languages</h2>
        <div className="grid">
          <div className="card">
            <h3>Core Languages</h3>
            <div style={{ marginTop: '1rem' }}>
              {['Java', 'Python', 'C#', 'C', 'C++', 'Dart'].map((lang) => (
                <span key={lang} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Web Essentials</h3>
            <div style={{ marginTop: '1rem' }}>
              {['HTML', 'CSS', 'JavaScript'].map((lang) => (
                <span key={lang} className="skill-tag">{lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2><Cpu size={20} /> Frameworks & Tools</h2>
        <div className="grid">
          <div className="card">
            <h3>Frontend</h3>
            <p>React, Next.js</p>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <p>Node.js</p>
          </div>
          <div className="card">
            <h3>Mobile</h3>
            <p>Flutter</p>
          </div>
        </div>
      </section>

      <section>
        <h2><Globe size={20} /> Expertise</h2>
        <div className="grid">
          <div className="card">
            <h3>Web Development</h3>
            <p>Modern, responsive web applications using React and Next.js.</p>
          </div>
          <div className="card">
            <h3>Desktop & Systems</h3>
            <p>Experience with .NET framework and low-level programming in C/C++.</p>
          </div>
          <div className="card">
            <h3>Mobile Apps</h3>
            <p>Cross-platform development with Flutter and Dart.</p>
          </div>
        </div>
      </section>

      <section>
        <h2><Database size={20} /> Databases</h2>
        <div className="grid">
          <div className="card">
            <h3>SQL & Relational</h3>
            <div style={{ marginTop: '1rem' }}>
              {['SQL', 'MySQL', 'PostgreSQL', 'Oracle'].map((db) => (
                <span key={db} className="skill-tag">{db}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Trần Bảo Nguyên. Built with React & Minimalism.</p>
      </footer>
    </div>
  )
}

export default App
