import './App.css'

function App() {
  const statsUrl = "https://github-readme-stats.vercel.app/api?username=trng1006&show_icons=true&theme=transparent&hide_border=true&title_color=000000&text_color=71717a&icon_color=000000&count_private=true";
  const languagesUrl = "https://github-readme-stats.vercel.app/api/top-langs/?username=trng1006&layout=compact&theme=transparent&hide_border=true&title_color=000000&text_color=71717a&hide=cmake,makefile";

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Album or Portfolio &nbsp; vertical version</h2>
      
      {/* Spread 1: Hero & About */}
      <div className="spread">
        <div className="page dark" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="wireframe-box crossed" style={{ height: '40%', marginBottom: '30px' }}></div>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '3rem' }}>Trần<br/>Bảo<br/>Nguyên.</h1>
            <p className="small-text" style={{ marginTop: '20px' }}>Software Engineer • Class of 2005</p>
          </div>
          <div className="grid-3" style={{ marginTop: 'auto' }}>
             <div className="wireframe-box crossed" style={{ height: '30px' }}></div>
             <div className="wireframe-box crossed" style={{ height: '30px' }}></div>
             <div className="wireframe-box crossed" style={{ height: '30px' }}></div>
          </div>
        </div>
        
        <div className="page" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="text-block" style={{ marginTop: '40px', maxWidth: '80%' }}>
            <h2>01 / The Journey</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              Building robust applications across web, mobile, and desktop platforms. Currently specializing in .NET Core and Advanced Web Architecture.
            </p>
          </div>
          
          <div className="grid-2" style={{ marginTop: '40px' }}>
            <div>
              <h3>Education</h3>
              <p>3rd Year Student (Semester 2) at University. Focusing on Computer Science and Software Engineering fundamentals.</p>
            </div>
            <div>
              <h3>Experience</h3>
              <p>Passionate about Web Development and the .NET Ecosystem. Exploring scalable architectures and modern frontend frameworks.</p>
            </div>
          </div>
          
          <div className="wireframe-box crossed" style={{ flex: 1, marginTop: '40px' }}></div>
        </div>
      </div>

      {/* Spread 2: Tech Stack */}
      <div className="spread">
        <div className="page">
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2>02 / Skills & Tools</h2>
            <div className="wireframe-box crossed" style={{ flex: 1, marginBottom: '20px', marginTop: '20px' }}></div>
            <div className="grid-2">
              <div className="wireframe-box crossed" style={{ height: '100px' }}></div>
              <div className="wireframe-box crossed" style={{ height: '100px' }}></div>
            </div>
          </div>
        </div>
        <div className="page" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3>Languages</h3>
            <div className="tag-list">
              {['Java', 'Python', 'C#', 'C', 'C++', 'Dart', 'JavaScript'].map(lang => (
                <span key={lang} className="tag-item">{lang}</span>
              ))}
            </div>
          </div>
          <div>
            <h3>Frameworks</h3>
            <div className="tag-list">
              {['React', 'Next.js', 'Node.js', '.NET', 'Flutter', 'HTML5', 'CSS3'].map(item => (
                <span key={item} className="tag-item">{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h3>Databases</h3>
            <div className="tag-list">
              {['SQL', 'MySQL', 'PostgreSQL', 'Oracle'].map(db => (
                <span key={db} className="tag-item">{db}</span>
              ))}
            </div>
          </div>
          
          <div className="wireframe-box crossed" style={{ flex: 1, marginTop: '20px' }}></div>
        </div>
      </div>

      {/* Spread 3: Projects (Dark) */}
      <div className="spread">
        <div className="page dark">
          <h2>03 / Selected Work</h2>
          
          <div style={{ position: 'absolute', top: '150px', left: '-50px', width: '300px', height: '300px' }} className="wireframe-box wireframe-circle crossed"></div>
          
          <div style={{ position: 'absolute', bottom: '40px', right: '40px', zIndex: 2, width: '60%' }}>
            <a href="https://github.com/trng1006/DemoNotification" target="_blank" rel="noopener noreferrer" className="project-link">
              <h3>DemoNotification</h3>
              <p>A C++ based notification application.</p>
              <div className="tag-list">
                <span className="tag-item">C++</span>
              </div>
            </a>
            <div style={{ height: '20px' }}></div>
            <a href="https://github.com/trng1006/LTDD_DoAn" target="_blank" rel="noopener noreferrer" className="project-link">
              <h3>Mobile App Project</h3>
              <p>Mobile Application project developed for university coursework.</p>
              <div className="tag-list">
                <span className="tag-item">Dart</span>
                <span className="tag-item">Flutter</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="page dark" style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ position: 'absolute', top: '80px', right: '40px', width: '150px', height: '150px' }} className="wireframe-box wireframe-circle crossed"></div>
           
           <div style={{ marginTop: 'auto', zIndex: 2 }}>
             <div className="grid-2">
              <a href="https://github.com/trng1006/DoAn_TH_Deeplearning" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="wireframe-box crossed" style={{ height: '120px', marginBottom: '15px' }}></div>
                <h3>Deep Learning</h3>
                <div className="tag-list">
                  <span className="tag-item">Python</span>
                </div>
              </a>
              <a href="https://github.com/trng1006/transfer_learning" target="_blank" rel="noopener noreferrer" className="project-link">
                <div className="wireframe-box crossed" style={{ height: '120px', marginBottom: '15px' }}></div>
                <h3>Transfer Learning</h3>
                <div className="tag-list">
                  <span className="tag-item">Python</span>
                </div>
              </a>
             </div>
           </div>
        </div>
      </div>

      {/* Spread 4: Stats & Contact */}
      <div className="spread">
        <div className="page" style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>04 / Stats</h2>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <img src={statsUrl} alt="GitHub Stats" className="stats-img" />
            <img src={languagesUrl} alt="Top Languages" className="stats-img" />
          </div>
        </div>
        <div className="page dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div className="wireframe-box crossed" style={{ width: '100%', height: '40%', position: 'absolute', top: 0, left: 0, border: 'none', borderBottom: '1px solid rgba(255,255,255,0.2)' }}></div>
          
          <div style={{ zIndex: 2, marginTop: '40%' }}>
            <h2>05 / Contact</h2>
            <h3 style={{ fontSize: '1.2rem', margin: '20px 0' }}>trng1006.work@gmail.com</h3>
            <p>I'm currently open to new opportunities<br/>and collaborations.</p>
            
            <a href="mailto:trng1006.work@gmail.com" style={{ 
              display: 'inline-block', 
              marginTop: '30px', 
              border: '1px solid var(--text-light)', 
              padding: '10px 30px', 
              color: 'inherit', 
              textDecoration: 'none',
              textTransform: 'uppercase',
              fontSize: '0.8rem',
              letterSpacing: '0.1em'
            }}>Send an Email</a>
          </div>
          
          <p className="small-text" style={{ position: 'absolute', bottom: '40px', left: '0', width: '100%', textAlign: 'center', opacity: 0.5 }}>
             &copy; {new Date().getFullYear()} Trần Bảo Nguyên.
          </p>
        </div>
      </div>

    </div>
  )
}

export default App
