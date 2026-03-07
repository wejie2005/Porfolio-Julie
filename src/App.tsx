import './App.css'
import profilePic from './assets/myprofile.png';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">MyPortfolio.</div>
        <div className="links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
       
          <div className="hero-text">
            <h1>Hi, I'm Julie! 👋</h1>
            <p>
               I'm a Computer Science student who loves turning classroom theory into real-world applications. 
               When I'm not studying, I'm building full-stack projects, learning new frameworks, and seeking an internship where I can grow and contribute to a great team.
            </p>
          </div>

          <div className="hero-image">
            <img 
              src={profilePic}
              alt="Julie's Profile" 
              className="profile-img" 
            />
          </div>

        </div>
      </section>

      <section className="tech-stack">
        <h3 style={{textAlign: 'center', marginBottom: '20px', color: '#64748b'}}>Technologies I Use</h3>
          <p style={{ 
           textAlign: 'center', 
           marginBottom: '30px', 
           color: '#94a3b8', 
           maxWidth: '600px', 
           margin: '0 auto 30px auto', 
           lineHeight: '1.5',
           fontSize: '0.95rem'
           }}>
           These are the technologies I have used to build projects and refine my skills. I am continuously exploring these tools, as well as learning new programming languages to expand my toolset.
          </p>
        <TechMarquee />
      </section>

      <section id="projects">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          <ProjectCard 
            title="Derma Agent Triage" 
            description=" Medical triage system that combines Computer Vision (OCR) and Retrieval-Augmented Generation (RAG) to identify skin irritants and provide clinical context."
            tags={['Python', 'Hugging Face', 'Gradio', 'Llama 3.3']}
            link="https://huggingface.co/spaces/JulsAlvarez2005/derma-agent-triage"
          />
           <ProjectCard 
            title="Studio Management Tracker" 
            description=" Designed to streamline operations for audio recording studios."
            tags={['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS']}
            link="https://github.com/JulsAlvarez2005/TR-Studio-Management-System"
          />
        </div>

        <div className="more-projects" style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: '#64748b', marginBottom: '15px' }}>
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/JulsAlvarez2005" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
            style={{ 
              backgroundColor: '#1e293b', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Explore my GitHub &rarr;
          </a>
        </div>
      </section>

      <footer id="contact" className="contact">
        <h2>Let's Connect</h2>
        <p className="contact-text">
          Open to internship roles for Summer 2026. <br/>
          Feel free to reach out!
        </p>

        <div className="social-icons">

          <a 
            href="https://github.com/JulsAlvarez2005" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>

          <a 
            href="https://www.linkedin.com/in/julie-anne-pesa%C3%B1a-667628362/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pesanajulieanne@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
              alt="Email" 
            />
          </a>
          
          <a 
            href="https://www.facebook.com/itsmejlieanne" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" />
          </a>
        </div>
        
        <p style={{fontSize: '0.8rem', color: '#94a3b8', marginTop: '20px'}}>
          © 2026. Built with React & TypeScript.
        </p>
      </footer>
    </div>
  )
}

const TechMarquee = () => {
  const skills = [
    { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Google Colab", img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Hugging Face", img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "Streamlit", img: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
    { name: "Gradio", img: "https://raw.githubusercontent.com/gradio-app/gradio/main/readme_files/gradio.svg" },
    { name: "Jupyter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
        {skills.map((skill, index) => (
          <div key={`duplicate-${index}`} className="skill-item">
            <img src={skill.img} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, tags, link }: ProjectProps) => {
  return (
    <article className="project-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
        <div className="tags">
          {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <a href={link} className="card-link">View Project &rarr;</a>
      </div>
    </article>
  );
}

export default App