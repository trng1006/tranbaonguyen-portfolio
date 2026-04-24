import './App.css'

function App() {
  const statsUrl = "https://github-readme-stats.vercel.app/api?username=trng1006&show_icons=true&theme=tokyonight&count_private=true";
  const languagesUrl = "https://github-readme-stats.vercel.app/api/top-langs/?username=trng1006&layout=compact&theme=tokyonight&hide=cmake,makefile";

  return (
    <div className="container">
      <header>
        <div className="title-animation">.. NE</div>
      </header>

      <section>
        <h2>💫 About Me:</h2>
        <ul className="about-list">
          <li>🎂 <strong>Birthday:</strong> June 10, 2005</li>
          <li>🎓 <strong>Education:</strong> 3rd Year Student (Semester 2)</li>
          <li>💻 <strong>Experience:</strong> Web Development & .NET Framework</li>
          <li>🌱 <strong>Learning:</strong> Deepening my knowledge in .NET Core and Advanced Web Architecture</li>
          <li>📫 <strong>Contact:</strong> <a href="mailto:trng1006@gmail.com" style={{color: '#58a6ff'}}>trng1006@users.noreply.github.com</a></li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>🚀 Tech Stack:</h2>
        <div style={{marginBottom: '20px'}}>
          <strong>Languages:</strong>
          <div className="badge-container">
            <span className="badge bg-python">PYTHON</span>
            <span className="badge bg-java">JAVA</span>
            <span className="badge bg-csharp">C#</span>
            <span className="badge bg-c">C</span>
            <span className="badge bg-cpp">C++</span>
            <span className="badge bg-flutter">DART</span>
          </div>
        </div>

        <div>
          <strong>Web & Frameworks:</strong>
          <div className="badge-container">
            <span className="badge bg-html5">HTML5</span>
            <span className="badge bg-css3">CSS3</span>
            <span className="badge bg-dotnet">.NET</span>
            <span className="badge bg-flutter">FLUTTER</span>
            <span className="badge bg-java" style={{backgroundColor: '#6DB33F'}}>NODE.JS</span>
          </div>
        </div>
      </section>

      <hr />

      <section>
        <h2>📊 GitHub Stats:</h2>
        <div className="stats-grid">
          <div className="stats-card">
            <img src={statsUrl} alt="GitHub Stats" style={{width: '100%'}} />
          </div>
          <div className="stats-card">
            <img src={languagesUrl} alt="Top Languages" style={{width: '100%'}} />
          </div>
        </div>
      </section>

      <hr />

      <footer style={{textAlign: 'center'}}>
        <div className="view-counter">Profile views 6</div>
      </footer>
    </div>
  )
}

export default App
